
import { startWith, map } from 'rxjs/operators';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TechnologieService } from './technologie.service'
import { Technologie } from './technologie.model';
import { ControlContainer, FormControl, NgForm, FormGroup } from '@angular/forms';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ],
})
export class TechnologieComponent implements OnInit {

  @Input() keyUtilisateur: any;
  @Input('groupFormTechnologie') formTechnologie: FormGroup;

  inputTitre: string;
  technologies: Technologie[];
  tmpTechnologie: Technologie = new Technologie("", 10);
  technologieAModifier: Observable<Technologie>;
  tmpNouvelleTechnologieModifie: Technologie;
  etatChange: boolean = false;
  etatOuvert: boolean = false;
  config = new MatSnackBarConfig();
  boutonModifier: boolean = false;
  docTechnologieIdCourant: any;
  isCollapsed = false;
  selectedTechnologie: string;

  technologiesDisponibles: Technologie[] = [
    {titre: 'css', pourcentage: 50},
    {titre: 'javascript', pourcentage: 70},
    {titre: 'jQuery', pourcentage: 30}
  ];
  inputTitreTechnologie = new FormControl();
  filteredTechnologies: Observable<Technologie[]>;
  question = 'Voulez vous ajouter ';

  constructor(private technologieService: TechnologieService, public snackBar: MatSnackBar, public dialog: MatDialog ) { }
  
  ngOnInit() {

    this.technologieService.technologiesChanged.subscribe( datas => {
      this.technologies = datas;      
    })    
    this.technologieService.getTechnologies(this.keyUtilisateur);

    this.technologieService.technologiesDisponibleChanged.subscribe( datas => {
      this.technologiesDisponibles = datas;      
      this.filteredTechnologies = this.inputTitreTechnologie.valueChanges
      .pipe(
        startWith(null),
        map((technologie: string | null) => technologie ? this._filter(technologie) : this.technologiesDisponibles.slice())
      );
    })    
    this.technologieService.getTechnologiesDisponible();

    this.config.duration = 5000;
  }

  resetForms(){
    this.formTechnologie.controls['pourcentage'].setValue(null)
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value+"%";
  }

  private _filter(name: string): Technologie[] {
    const filterValue = name.toLowerCase();
    let results = this.technologiesDisponibles.filter(option => option.titre.toLowerCase().indexOf(filterValue) === 0);
    if (results.length < 1) {
      results = [{titre: this.question + name + '?', pourcentage: 0}];
      // results = [this.question + JSON.stringify(name) + '?'];
    }

    

    return results;
  }

  onChangeInput(event){
    this.etatChange = true;
    this.etatOuvert = false;
    
    if(event.option){
      if (event.value.indexOf(this.question) === 0) {
        let newState = event.value.substring(this.question.length).split('?')[0];
        //this.states.push(newState);
        this.inputTitre = newState;
      }else{
        this.inputTitre = event.option.value
      }
    }
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }

  AjouterTechnologie(){
    this.technologieService.ajouterTechnologie(this.keyUtilisateur, this.tmpTechnologie).then(
        result => {
            this.afficherNotification('Ajouté', 'background-verte');
            this.etatChange = false;
            //this.resetForms();
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Ajout non réussi', 'background-rouge');
        }
    );
  }

  onClickEnregistrerTechnologie(){
    this.tmpTechnologie.titre = this.inputTitre;
    console.log("inputTitre");
    console.log(this.inputTitre);
    console.log("inputValue");
    console.log(this.formTechnologie.controls['titreTechnologie'].value);
    this.tmpTechnologie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
    this.isCollapsed = false;
    this.AjouterTechnologie();
  }

  onClickSupprimerTechnologie(docTechnologieId: any){

    this.technologieService.supprimerTechnologie(this.keyUtilisateur, docTechnologieId).then(
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

 onClickEnregistrerModifTechnologie(){
    this.technologieService.modifierTechnologie(this.keyUtilisateur, this.docTechnologieIdCourant, this.getTechnologieAModifier()).then(
        result => {
            this.afficherNotification('Modifié', 'background-verte');
            this.boutonModifier = false;
            this.etatChange = false;
            this.inputTitreTechnologie.setValue(undefined)
            this.isCollapsed = false;
            this.resetForms();
          }
    )
    .catch(
        error =>{
            this.afficherNotification('Modification non réussite', 'background-rouge');
        }
    );
  }

  getTechnologieAModifier(){
    this.tmpNouvelleTechnologieModifie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
    return this.tmpNouvelleTechnologieModifie;
  } 

  onClickModifierTechnologie(docTechnologieId: any){
    this.boutonModifier = true;
    this.etatOuvert = true;
    this.docTechnologieIdCourant = docTechnologieId;
    this.isCollapsed = true;
    this.technologieAModifier = this.technologieService.getTechnologie(this.keyUtilisateur, docTechnologieId);
    this.technologieAModifier.subscribe(datas =>{
      this.tmpNouvelleTechnologieModifie = datas;  
      this.inputTitreTechnologie.disable();
      this.inputTitreTechnologie.setValue(this.tmpNouvelleTechnologieModifie.titre)
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
    this.isCollapsed = true;
    this.inputTitreTechnologie.enable();
    this.inputTitreTechnologie.setValue("")
  }
  
  onClickModifier(){
    this.etatOuvert = true;
    this.isCollapsed = true;
  }
}
