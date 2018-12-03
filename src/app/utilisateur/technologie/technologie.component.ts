
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

  test: string = "titre de test"
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

  constructor(private technologieService: TechnologieService, public snackBar: MatSnackBar, public dialog: MatDialog ) { }
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.technologieService.technologiesChanged.subscribe( datas => {
      console.log(datas)
      this.technologies = datas;      
    })    
    this.technologieService.getTechnologies(this.keyUtilisateur);
    this.config.duration = 5000;
  }
  
  

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value+"%";
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onChangeInput(event){
    this.etatChange = true;
    this.etatOuvert = false;
    if(event.option){this.inputTitre = event.option.value}
  }

  setSelectPourModif(): void {
      //this.formTechnologie.setValue(this.inputTitre);
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
            this.formTechnologie.reset();
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
    this.tmpTechnologie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
    this.isCollapsed = false;
    this.AjouterTechnologie();
  }

  onClickSupprimerTechnologie(docTechnologieId: any){

    this.technologieService.supprimerTechnologie(this.keyUtilisateur, docTechnologieId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
            this.etatChange = false;
            this.formTechnologie.reset();
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
            this.formTechnologie.reset();
            this.isCollapsed = false;
          }
    )
    .catch(
        error =>{
            this.afficherNotification('Modification non réussite', 'background-rouge');
        }
    );
  }

  getTechnologieAModifier(){
    this.tmpNouvelleTechnologieModifie.titre = this.inputTitre;
    this.tmpNouvelleTechnologieModifie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
    return this.tmpNouvelleTechnologieModifie;
  }

  onClickModifierTechnologie(docTechnologieId: any){
    this.inputTitre = "test"
    this.boutonModifier = true;
    this.etatOuvert = true;
    this.docTechnologieIdCourant = docTechnologieId;
    this.isCollapsed = true;
    this.technologieAModifier = this.technologieService.getTechnologie(this.keyUtilisateur, docTechnologieId);
    this.technologieAModifier.subscribe(datas =>{
      this.tmpNouvelleTechnologieModifie = datas;
    })
  }

  onClickAnnuler(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.formTechnologie.reset();
    this.isCollapsed = false;
  }

  onClickFermer(){
    this.etatOuvert = false;
    this.boutonModifier = false;
    this.etatChange = false;
    this.formTechnologie.reset();
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
