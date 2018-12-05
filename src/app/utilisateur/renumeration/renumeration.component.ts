import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RenumerationService } from './renumeration.service'
import { Renumeration } from './renumeration.model';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-renumeration',
  templateUrl: './renumeration.component.html',
  styleUrls: ['./renumeration.component.css']
})
export class RenumerationComponent implements OnInit {
  
  @Input() keyUtilisateur: any;
  @Input('groupFormRenumeration') formGroupRenumeration: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  filteredRenumerations: Observable<string[]>;
  renumerationsUtilisateur: Renumeration[];
  allRenumerations: string[];
  config = new MatSnackBarConfig();

  @ViewChild('renumerationInput') renumerationInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private renumerationService: RenumerationService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.config.duration = 5000;
    this.renumerationService.renumerationsChanged.subscribe( datas => {
      this.renumerationsUtilisateur = JSON.parse(JSON.stringify(datas));  
    })    
    this.renumerationService.getRenumerations(this.keyUtilisateur);

    this.renumerationService.renumerationsDisponibleChanged.subscribe( datas => {
      this.allRenumerations = JSON.parse(JSON.stringify(datas));   
      this.filteredRenumerations = this.formControl.valueChanges.pipe(
        startWith(null),
        map((renumeration: string | null) => renumeration ? this._filter(renumeration) : this.allRenumerations.slice()));
    })    
    this.renumerationService.getRenumerationsDisponible();
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our renumeration
      if ((value || '').trim()) {
        this.renumerationsUtilisateur.push({'titre_renumeration': value.trim()});
        this.renumerationService.ajouterRenumeration(this.keyUtilisateur, {'titre_renumeration': value.trim()}).then(
            result => {
                this.afficherNotification('Ajouté', 'background-verte');
                
              }
        )
        .catch(
            error =>{
                this.afficherNotification('Ajout non réussi', 'background-rouge');
            }
        );
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.formControl.setValue(null);
    }
  }

  remove(renumeration: string, docRenumerationId: any): void {
    const index = this.renumerationsUtilisateur.indexOf({'titre_renumeration' : renumeration});
    this.renumerationService.supprimerRenumeration(this.keyUtilisateur, docRenumerationId).then(
        result => {
            this.afficherNotification('Supprimé', 'background-verte');
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Suppression non réussite', 'background-rouge');
        }
    );
    if (index >= 0) {
      this.renumerationsUtilisateur.splice(index, 1);
      
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let trouve = this.renumerationsUtilisateur.map(a => a.titre_renumeration).includes(event.option.viewValue);
    let nbr_renumeration = this.renumerationsUtilisateur.length;
    if(nbr_renumeration<2){
      if(!trouve){
        this.renumerationsUtilisateur.push({'titre_renumeration':event.option.viewValue});
        this.renumerationService.ajouterRenumeration(this.keyUtilisateur, {'titre_renumeration': event.option.viewValue}).then(
            result => {
                this.afficherNotification('Ajouté', 'background-verte');
                
              }
        )
        .catch(
            error =>{
                this.afficherNotification('Ajout non réussi', 'background-rouge');
            }
        );
      
        this.renumerationInput.nativeElement.value = '';
        this.formControl.setValue(null);
      }
    }else{
      this.afficherNotification('Choisir au maximum deux paliers', 'background-rouge');
    }
    
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allRenumerations.filter(renumeration => renumeration.toLowerCase().indexOf(filterValue) === 0);
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }

}
