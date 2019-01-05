import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';
import { MatDatepickerIntl, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


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
  tmpEducation: Education = new Education("", "", undefined, undefined, "");
  educationAModifier: Observable<Education>;
  tmpNouvelleEducationModifie: Education;
  etatChange: boolean = false;
  etatOuvert: boolean = false;
  config = new MatSnackBarConfig();
  boutonModifier: boolean = false;
  docEducationIdCourant: any;
  isCollapsed = false;
  
  constructor(private educationService: EducationService, private adapter: DateAdapter<any>, public snackBar: MatSnackBar, public dialog: MatDialog) { 
    super();
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.educationService.educationsChanged.subscribe( datas => {
      console.log(datas)
      this.educations = datas;      
    })    
    this.educationService.getEducations(this.keyUtilisateur);
    this.config.duration = 5000;
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
            this.formEducation.reset();
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
    
    console.log("formEducation")
    console.log(this.formEducation)
    this.AjouterEducation();
  }

  onClickSupprimerEducation(docEducationId: any){

    this.educationService.supprimerEducation(this.keyUtilisateur, docEducationId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
            this.etatChange = false;
            this.formEducation.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Suppression non réussite', 'background-rouge');
        }
    );
  }

 onClickEnregistrerModifEducation(){
    this.educationService.modifierEducation(this.keyUtilisateur, this.docEducationIdCourant, this.getEducationAModifier()).then(
        result => {
            this.afficherNotification('Modifié', 'background-verte');
            this.boutonModifier = false;
            this.etatChange = false;
            this.formEducation.reset();
            this.isCollapsed = false;
          }
    )
    .catch(
        error =>{
            this.afficherNotification('Modification non réussite', 'background-rouge');
        }
    );
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
    this.formEducation.reset();
    this.isCollapsed = false;
  }

  onClickFermer(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.formEducation.reset();
    this.isCollapsed = false;
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


