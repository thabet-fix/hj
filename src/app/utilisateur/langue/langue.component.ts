import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { LangueService } from './langue.service'
import { Langue } from './langue.model';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
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
  languesUtilisateur: string[];
  allLangues: string[] = ['Français', 'Anglais', 'Arabe', 'Allemand', 'Italien'];

  @ViewChild('langueInput') langueInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private langueService: LangueService) {
    this.filteredLangues = this.formControl.valueChanges.pipe(
        startWith(null),
        map((langue: string | null) => langue ? this._filter(langue) : this.allLangues.slice()));
  }

  ngOnInit() {
    this.langueService.languesChanged.subscribe( datas => {
      console.log("datas")
      console.log(datas)
      this.languesUtilisateur = JSON.parse(JSON.stringify(datas));
      console.log("languesUtilisateur")      
      console.log(this.languesUtilisateur)      
    })    
    this.langueService.getLangues(this.keyUtilisateur);
  }

  add(event: MatChipInputEvent): void {
    // Add langue only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our langue
      if ((value || '').trim()) {
        this.languesUtilisateur.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.formControl.setValue(null);
    }
  }

  remove(langue: string): void {
    const index = this.languesUtilisateur.indexOf(langue);

    if (index >= 0) {
      this.languesUtilisateur.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languesUtilisateur.push(event.option.viewValue);
    this.langueInput.nativeElement.value = '';
    this.formControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLangues.filter(langue => langue.toLowerCase().indexOf(filterValue) === 0);
  }

  

}
