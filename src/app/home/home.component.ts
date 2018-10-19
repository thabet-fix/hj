import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import * as $ from 'jquery';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmploiService } from '../emploi/emploi.service';

import { Observable, Subscription } from 'rxjs';

import 'rxjs/add/operator/map';
import { Emploi } from '../emploi/emploi.model';
import { switchMap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, OnDestroy {

  emploiSubscription: Subscription;
  emplois: Emploi[];
  secteurs: Emploi[];
  lieux: Emploi[];
  emploisGroupedBySecteur: Emploi[];
  nbr_emploi = null;
  

  isAuthenticated = false;
  authSubscription: Subscription;
  
  constructor(
    private emploiService: EmploiService, 
    private inscriptionService: InscriptionService, 
    public dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute
  ) {

  }
  
  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
         this.emplois = emplois; 
         this.nbr_emploi = emplois.length;
         console.log(this.emplois);
         this.emploisGroupedBySecteur = Object.values(this.groupBy(this.emplois, 'secteur'));
         this.secteurs = Object.values(this.groupBy(this.emplois, 'secteur'));
         this.lieux = Object.values(this.groupBy(this.emplois, 'lieu'));
         
        });
    this.emploiService.getEmplois();

    jQuery('#carousel').carousel();

    this.authSubscription = this.inscriptionService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpInscription, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

  openDialogConnexion(): void {
    const dialogRef = this.dialog.open(PopUpConnexion, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog connexion was closed');      
    });
  }

  ngOnDestroy() {
    this.emploiSubscription.unsubscribe();
  }
  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  selected = 'option2';

  onClickChercher(form: NgForm) {
    this.emploiService.setTmpMotCle(form.value.tmpMotCleInput?form.value.tmpMotCleInput:"");
    this.emploiService.setTmpSecteur(form.value.tmpSecteurInput?form.value.tmpSecteurInput:"");
    this.emploiService.setTmpPays(form.value.tmpPaysInput?form.value.tmpPaysInput:"");
    this.router.navigate(['emploi'], {relativeTo: this.route});
  }

}






import { InscriptionService } from '../inscription/inscription.service';
import { MatSnackBar } from '@angular/material';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  selector: 'pop-up-inscription',
  templateUrl: 'pop-up-inscription.html',
})
export class PopUpInscription {

  isAuthenticated = false;
  authSubscription: Subscription;
  constructor(
    public dialogRef: MatDialogRef<PopUpInscription>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private inscriptionService: InscriptionService,
    public snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.authSubscription = this.inscriptionService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
      if(this.isAuthenticated){
        this.snackBar.openFromComponent(NotificationComponent, {
          duration: 3000,
        });
      }
    });
  }

  onSubmitInscription(form: NgForm) {
    this.inscriptionService.inscriptionUtilisateur({
      email: form.value.email,
      password: form.value.password
    });
  }


}

@Component({
  selector: 'pop-up-connexion',
  templateUrl: 'pop-up-connexion.html',
})
export class PopUpConnexion {

  isAuthenticated = false;
  authSubscription: Subscription;
  constructor(
    public dialogRef: MatDialogRef<PopUpConnexion>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private inscriptionService: InscriptionService,
    public snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.authSubscription = this.inscriptionService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
      if(this.isAuthenticated){
        this.snackBar.openFromComponent(NotificationComponent, {
          duration: 3000,
        });
      }
    });
  }

  onSubmitConnexion(form: NgForm) {
    this.inscriptionService.connexionUtilisateur({
      email: form.value.email,
      password: form.value.password
    });
  }

}