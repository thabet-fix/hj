import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EducationService } from './education.service'
import { Education } from './education.model';
import { NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() keyUtilisateur: any;
  //@ViewChild('formEducation') formEducation: NgForm;
  
  @Input('group') formEducation: FormGroup;

  educations: Education[];
  tmpEducation: Education;
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
    this.tmpEducation.titre = this.formEducation.value.titre;
    this.tmpEducation.nom_ecole = this.formEducation.value.nom_ecole;
    this.tmpEducation.date_debut = this.formEducation.value.date_debut;
    this.tmpEducation.date_fin = this.formEducation.value.date_fin;
    this.tmpEducation.description = this.formEducation.value.description;
    this.educationService.ajouterEducation(this.keyUtilisateur, this.tmpEducation);
  }

}
