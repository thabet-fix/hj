import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { ControlContainer, NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class EducationComponent implements OnInit {
  @Input() keyUtilisateur: any;
  //@ViewChild('formProfil') formProfil: NgForm;
  @Input('groupFormEducation') formEducation: FormGroup;
  
  test: string = "titre de test"
  inputTitre: string;
  educations: Education[];
  tmpEducation: Education = new Education("", "", "", undefined, undefined, "");
  etatModif: boolean = false;
  constructor(private educationService: EducationService) { }

  ngOnInit() {
    this.educationService.educationsChanged.subscribe( datas => {
      console.log(this.keyUtilisateur)
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
    //this.tmpEducation.date_debut = this.formEducation.controls['date_debut'].value;
    //this.tmpEducation.date_fin = this.formEducation.controls['date_fin'].value;
    this.tmpEducation.description = this.formEducation.controls['description'].value;
    this.educationService.ajouterEducation(this.keyUtilisateur, JSON.parse(JSON.stringify(this.tmpEducation)));
  }

}
