import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';
import { MatDatepickerIntl, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';


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
  tmpEducation: Education = new Education("", "", "", undefined, undefined, "");
  etatModif: boolean = false;
  constructor(private educationService: EducationService, private adapter: DateAdapter<any>) { 
    super();
  }

  ngOnInit() {
    this.adapter.setLocale('fr');
    this.educationService.educationsChanged.subscribe( datas => {
      console.log(datas)
      this.educations = datas;      
    })    
    this.educationService.getEducations(this.keyUtilisateur);
    
  }

  onChangeInput(event){
    this.etatModif = true;
  }

  onClickEnregistrerEducation(){
    this.tmpEducation.titre = this.formEducation.controls['titre'].value;
    this.tmpEducation.nom_ecole = this.formEducation.controls['nom_ecole'].value;
    this.tmpEducation.date_debut = new Date(this.formEducation.controls['date_debut'].value);
    this.tmpEducation.date_fin =   new Date(this.formEducation.controls['date_fin'].value);
    this.tmpEducation.description = this.formEducation.controls['description'].value;
    this.educationService.ajouterEducation(this.keyUtilisateur, JSON.parse(JSON.stringify(this.tmpEducation)));
  }

}
