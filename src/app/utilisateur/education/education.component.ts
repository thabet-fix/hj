import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';
import { MatDatepickerIntl, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, Sort } from '@angular/material';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
})
export class EducationComponent extends MatDatepickerIntl implements OnInit {
  @Input() keyUtilisateur: any;
  @Input('groupFormEducation') formEducation: FormGroup;
  
  test: string = "titre de test"
  inputTitre: string;
  educations: Education[];
  educations2: Education[];
  tmpEducation: Education = new Education("", "", undefined, undefined, "");
  educationAModifier: Observable<Education>;
  tmpNouvelleEducationModifie: Education;
  etatChange: boolean = false;
  etatOuvert: boolean = false;
  config = new MatSnackBarConfig();
  boutonModifier: boolean = false;
  docEducationIdCourant: any;
  isCollapsed = false;
  sortedEducations: Education[];
  

  constructor(private educationService: EducationService, private adapter: DateAdapter<any>, public snackBar: MatSnackBar, public dialog: MatDialog) { 
    super();
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.educationService.educationsChanged.subscribe( datas => {
      this.educations = datas;
      //this.educations.reverse();
      console.log(this.educations);
      this.sortedEducations = this.educations.slice();
    })    
    this.educationService.getEducations(this.keyUtilisateur);
    this.config.duration = 5000;
  }

  sortData(sort: Sort) {
    const data = this.educations.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedEducations = data;
      return;
    }

    this.sortedEducations = data.sort((a, b) => {
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'titre': return this.compare(a.titre, b.titre, isDesc);
        case 'nom_ecole': return this.compare(a.nom_ecole, b.nom_ecole, isDesc);
        case 'description': return this.compare(a.description, b.description, isDesc);
        case 'date_debut': return this.compare(a.date_debut, b.date_debut, isDesc);
        case 'date_fin': return this.compare(a.date_fin, b.date_fin, isDesc);
        default: return 0;
      }
    });
    console.log(this.sortedEducations);
  }

  compare(a: number | Date | string, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  resetForms(){
    this.formEducation.controls['titre'].setValue(null)
    this.formEducation.controls['nom_ecole'].setValue(null)
    this.formEducation.controls['date_debut'].setValue(null)
    this.formEducation.controls['date_fin'].setValue(null)
    this.formEducation.controls['description'].setValue(null)
  }

  onChangeInput(event){
    this.etatChange = true;
    this.etatOuvert = false;
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }

  AjouterEducation(){
    this.educationService.ajouterEducation(this.keyUtilisateur, this.tmpEducation).then(
        result => {
            this.afficherNotification('Ajouté', 'background-verte');
            this.etatChange = false;
            this.resetForms();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Ajout non réussi', 'background-rouge');
        }
    );
  }

  onClickEnregistrerEducation(){
    
    this.tmpEducation.titre = this.formEducation.controls['titre'].value;
    this.tmpEducation.nom_ecole = this.formEducation.controls['nom_ecole'].value;
    this.tmpEducation.date_debut = this.formEducation.controls['date_debut'].value?new Date(this.formEducation.controls['date_debut'].value):undefined;
    this.tmpEducation.date_fin =   this.formEducation.controls['date_fin'].value?new Date(this.formEducation.controls['date_fin'].value):undefined;
    this.tmpEducation.description = this.formEducation.controls['description'].value;
    this.isCollapsed = false;
    
    if(this.tmpEducation.date_debut < this.tmpEducation.date_fin){
      this.AjouterEducation();
    }
    else{
      this.afficherNotification('La date de fin doit être suppérieure à la date de début', 'background-rouge');
      this.onClickAnnuler();
    }
    
  }

  onClickSupprimerEducation(docEducationId: any){

    this.educationService.supprimerEducation(this.keyUtilisateur, docEducationId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
            this.etatChange = false;
            this.resetForms();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Suppression non réussite', 'background-rouge');
        }
    );
  }

  onClickEnregistrerModifEducation() {
    if (new Date(this.formEducation.controls['date_debut'].value) < new Date(this.formEducation.controls['date_fin'].value)) {
      this.educationService.modifierEducation(this.keyUtilisateur, this.docEducationIdCourant, this.getEducationAModifier()).then(
        result => {
          this.afficherNotification('Modifié', 'background-verte');
          this.boutonModifier = false;
          this.etatChange = false;
          this.isCollapsed = false;
          this.resetForms();
        }
      )
        .catch(
          error => {
            this.afficherNotification('Modification non réussite', 'background-rouge');
          }
        );
    } else {
      this.afficherNotification('La date de fin doit être suppérieure à la date de début', 'background-rouge');
      this.onClickAnnuler();
    }

  }

  getEducationAModifier(){
    this.tmpNouvelleEducationModifie.titre = this.formEducation.controls['titre'].value;
    this.tmpNouvelleEducationModifie.nom_ecole = this.formEducation.controls['nom_ecole'].value;
    this.tmpNouvelleEducationModifie.date_debut = this.formEducation.controls['date_debut'].value?new Date(this.formEducation.controls['date_debut'].value):undefined;
    this.tmpNouvelleEducationModifie.date_fin =   this.formEducation.controls['date_fin'].value?new Date(this.formEducation.controls['date_fin'].value):undefined;
    this.tmpNouvelleEducationModifie.description = this.formEducation.controls['description'].value;
    console.log(this.tmpNouvelleEducationModifie)
    return this.tmpNouvelleEducationModifie;
  }

  onClickModifierEducation(docEducationId: any){
    this.boutonModifier = true;
    this.etatOuvert = true;
    this.docEducationIdCourant = docEducationId;
    this.isCollapsed = true;
    this.educationAModifier = this.educationService.getEducation(this.keyUtilisateur, docEducationId);
    this.educationAModifier.subscribe(datas =>{
      this.tmpNouvelleEducationModifie = datas;
    })
  }

  onClickAnnuler(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.isCollapsed = false;
    this.resetForms();
  }

  onClickFermer(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.isCollapsed = false;
    this.resetForms();
  }

  onClickAjouter(){
    this.etatOuvert = true;
    this.isCollapsed = true
  }
  
  onClickModifier(){
    this.etatOuvert = true;
    this.isCollapsed = true;
  }
}


