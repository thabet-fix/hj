import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from './experience.service'
import { Experience } from './experience.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';
import { MatDatepickerIntl, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
  ],
})
export class ExperienceComponent extends MatDatepickerIntl implements OnInit {
  @Input() keyUtilisateur: any;
  @Input('groupFormExperience') formGroupExperience: FormGroup;
  
  experiences: Experience[];
  nouvelleExperience: Experience = new Experience("", "", undefined, undefined, "");
  experienceAModifier: Observable<Experience>;
  tmpNouvelleExperienceModifie: Experience;
  etatChange: boolean = false;
  etatOuvert: boolean = false;
  config = new MatSnackBarConfig();
  boutonModifier: boolean = false;
  docExperienceIdCourant: any;
  
  constructor(private experienceService: ExperienceService, private adapter: DateAdapter<any>, public snackBar: MatSnackBar, public dialog: MatDialog) { 
    super();
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.experienceService.experiencesChanged.subscribe( datas => {
      this.experiences = datas;      
    })    
    this.experienceService.getExperiences(this.keyUtilisateur);
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

  AjouterExperience(){
    this.experienceService.ajouterExperience(this.keyUtilisateur, this.nouvelleExperience).then(
        result => {
            this.afficherNotification('Ajouté', 'background-verte');
            this.etatChange = false;
            this.formGroupExperience.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Ajout non réussi', 'background-rouge');
        }
    );
  }

  onClickEnregistrerExperience(){
    this.nouvelleExperience.titre = this.formGroupExperience.controls['titreExperience'].value;
    this.nouvelleExperience.nom_societe = this.formGroupExperience.controls['nom_societeExperience'].value;
    this.nouvelleExperience.date_debut = this.formGroupExperience.controls['date_debutExperience'].value?new Date(this.formGroupExperience.controls['date_debutExperience'].value):undefined;
    this.nouvelleExperience.date_fin =   this.formGroupExperience.controls['date_finExperience'].value?new Date(this.formGroupExperience.controls['date_finExperience'].value):undefined;
    this.nouvelleExperience.description = this.formGroupExperience.controls['descriptionExperience'].value;
    this.AjouterExperience();
  }

  onClickSupprimerExperience(docExperienceId: any){

    this.experienceService.supprimerExperience(this.keyUtilisateur, docExperienceId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
            this.etatChange = false;
            this.formGroupExperience.reset();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Suppression non réussite', 'background-rouge');
        }
    );
  }

 onClickEnregistrerModifExperience(){
    this.experienceService.modifierExperience(this.keyUtilisateur, this.docExperienceIdCourant, this.getExperienceAModifier()).then(
        result => {
            this.afficherNotification('Modifié', 'background-verte');
            this.boutonModifier = false;
            this.etatChange = false;
            this.formGroupExperience.reset();
            console.log(this.boutonModifier)
            console.log(this.etatChange)
          }
    )
    .catch(
        error =>{
            this.afficherNotification('Modification non réussite', 'background-rouge');
        }
    );
  }

  getExperienceAModifier(){
    this.tmpNouvelleExperienceModifie.titre = this.formGroupExperience.controls['titreExperience'].value;
    this.tmpNouvelleExperienceModifie.nom_societe = this.formGroupExperience.controls['nom_societeExperience'].value;
    this.tmpNouvelleExperienceModifie.date_debut = this.formGroupExperience.controls['date_debutExperience'].value?new Date(this.formGroupExperience.controls['date_debutExperience'].value):undefined;
    this.tmpNouvelleExperienceModifie.date_fin =   this.formGroupExperience.controls['date_finExperience'].value?new Date(this.formGroupExperience.controls['date_finExperience'].value):undefined;
    this.tmpNouvelleExperienceModifie.description = this.formGroupExperience.controls['descriptionExperience'].value;
    return this.tmpNouvelleExperienceModifie;
  }

  onClickModifierExperience(docExperienceId: any){
    this.boutonModifier = true;
    this.etatOuvert = true;
    this.docExperienceIdCourant = docExperienceId;
    this.experienceAModifier = this.experienceService.getExperience(this.keyUtilisateur, docExperienceId);
    this.experienceAModifier.subscribe(datas =>{
      this.tmpNouvelleExperienceModifie = datas;
    })
  }

  onClickAnnuler(){
    this.boutonModifier = false;
    this.etatChange = false;
    this.formGroupExperience.reset();
  }

  onClickFermer(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.formGroupExperience.reset();
  }

  onClickAjouter(){
    this.etatOuvert = true;
  }
}


