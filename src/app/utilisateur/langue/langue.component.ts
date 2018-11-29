import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {
  
  @Input() keyUtilisateur: any;
  @Input('groupFormLangue') formGroupLangue: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
