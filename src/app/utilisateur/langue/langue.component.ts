import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { LangueService } from './langue.service'
import { Langue } from './langue.model';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {
  
  @Input() keyUtilisateur: any;
  @Input('groupFormLangue') formGroupLangue: FormGroup;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  filteredLangues: Observable<string[]>;
  languesUtilisateur: Langue[];
  allLangues: string[];
  config = new MatSnackBarConfig();

  @ViewChild('langueInput') langueInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private langueService: LangueService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.config.duration = 5000;
    this.langueService.languesChanged.subscribe( datas => {
      this.languesUtilisateur = JSON.parse(JSON.stringify(datas));   
    })    
    this.langueService.getLangues(this.keyUtilisateur);

    this.langueService.languesDisponibleChanged.subscribe( datas => {
      this.allLangues = JSON.parse(JSON.stringify(datas));   
      this.filteredLangues = this.formControl.valueChanges.pipe(
        startWith(null),
        map((langue: string | null) => langue ? this._filter(langue) : this.allLangues.slice()));
    })    
    this.langueService.getLanguesDisponible();
  }

  add(event: MatChipInputEvent): void {
    // Add langue only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our langue
      if ((value || '').trim()) {
        this.languesUtilisateur.push({'titre_langue': value.trim()});
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.formControl.setValue(null);
    }
  }

  remove(langue: string, docLangueId: any): void {
    const index = this.languesUtilisateur.indexOf({'titre_langue' : langue});
    this.langueService.supprimerLangue(this.keyUtilisateur, docLangueId).then(
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
      this.languesUtilisateur.splice(index, 1);
      
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languesUtilisateur.push({'titre_langue':event.option.viewValue});
    this.langueService.ajouterLangue(this.keyUtilisateur, {'titre_langue': event.option.viewValue}).then(
        result => {
            this.afficherNotification('Ajouté', 'background-verte');
            
          }
    )
    .catch(
        error =>{
            this.afficherNotification('Ajout non réussi', 'background-rouge');
        }
    );
  
    this.langueInput.nativeElement.value = '';
    this.formControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLangues.filter(langue => langue.toLowerCase().indexOf(filterValue) === 0);
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }

}
