import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';
import { MatDatepickerIntl, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import * as $ from 'jquery';
import { Observable } from 'rxjs';

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
  //educationAModifier: Observable<Education>;
  educationAModifier: Education;
  etatModif: boolean = false;
  config = new MatSnackBarConfig();
  
  constructor(private educationService: EducationService, private adapter: DateAdapter<any>, public snackBar: MatSnackBar) { 
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
    this.etatModif = true;
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }

  AjouterEducation(){
    this.educationService.ajouterEducation(this.keyUtilisateur, this.tmpEducation).then(
        result => {
            this.afficherNotification('Sauvegardé', 'background-verte');
            this.etatModif = false;
            this.formEducation.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Sauvegarde non réussi', 'background-rouge');
        }
    );
  }

  onClickEnregistrerEducation(){
    this.tmpEducation.titre = this.formEducation.controls['titre'].value;
    this.tmpEducation.nom_ecole = this.formEducation.controls['nom_ecole'].value;
    this.tmpEducation.date_debut = this.formEducation.controls['date_debut'].value?new Date(this.formEducation.controls['date_debut'].value):undefined;
    this.tmpEducation.date_fin =   this.formEducation.controls['date_fin'].value?new Date(this.formEducation.controls['date_fin'].value):undefined;
    this.tmpEducation.description = this.formEducation.controls['description'].value;
    this.AjouterEducation();
  }

  onClickSupprimerEducation(docEducationId: any){
    this.educationService.supprimerEducation(this.keyUtilisateur, docEducationId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
            this.etatModif = false;
            this.formEducation.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Suppression non réussite', 'background-rouge');
        }
    );
  }

  modifierEducation(docEducationId: any){
    this.educationService.modifierEducation(this.keyUtilisateur, docEducationId, this.getEducationAModifier()).then(
        result => {
            this.afficherNotification('Modifié', 'background-verte');
            this.etatModif = false;
            this.formEducation.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Modification non réussite', 'background-rouge');
        }
    );
  }

  getEducationAModifier(){
    return this.educationAModifier;
  }

  onClickModifierEducation(docEducationId: any){
    
    
    // this.educationService.educationChanged
    //this.educationAModifier = this.educationService.getEducation(this.keyUtilisateur, docEducationId);
    //this.remplirChamps();
  }

}
