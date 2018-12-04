
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

  technologiesDisponibles: Technologie[] = [
    {titre: 'css', pourcentage: 50},
    {titre: 'javascript', pourcentage: 70},
    {titre: 'jQuery', pourcentage: 30}
  ];
  inputTitreTechnologie = new FormControl();
  //technologiesDisponibles: string[] = ['One', 'Two', 'Three'];
  filteredTechnologies: Observable<Technologie[]>;

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
        startWith<string | Technologie>(''),
        map(value => typeof value === 'string' ? value : value.titre),
        map(titre => titre ? this._filter(titre) : this.technologiesDisponibles.slice())
      );
    })    
    this.technologieService.getTechnologiesDisponible();

    this.config.duration = 5000;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value+"%";
  }

  private _filter(name: string): Technologie[] {
    const filterValue = name.toLowerCase();

    return this.technologiesDisponibles.filter(option => option.titre.toLowerCase().indexOf(filterValue) === 0);
  }

  onChangeInput(event){
    this.etatChange = true;
    this.etatOuvert = false;
    if(event.option){this.inputTitre = event.option.value}
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
            this.inputTitreTechnologie.setValue(undefined)
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
    console.log("enter")
    console.log(this.tmpNouvelleTechnologieModifie.titre)
    console.log(this.tmpNouvelleTechnologieModifie)
    this.tmpNouvelleTechnologieModifie.titre = this.inputTitre;
    this.tmpNouvelleTechnologieModifie.pourcentage = this.formTechnologie.controls['pourcentage'].value;
    return this.tmpNouvelleTechnologieModifie;
  } 

  onClickModifierTechnologie(docTechnologieId: any){
    this.boutonModifier = true;
    this.etatOuvert = true;
    this.docTechnologieIdCourant = docTechnologieId;
    console.log(docTechnologieId)
    this.isCollapsed = true;
    this.technologieService.getTechnologie(this.keyUtilisateur, docTechnologieId).subscribe(datas =>{
      this.tmpNouvelleTechnologieModifie = datas;
      this.inputTitreTechnologie.setValue(this.tmpNouvelleTechnologieModifie.titre)
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
