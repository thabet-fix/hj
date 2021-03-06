import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import * as $ from 'jquery';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmploiService } from '../emploi/emploi.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

import { Observable, Subscription, Subject } from 'rxjs';

import 'rxjs/add/operator/map';
import { Emploi } from '../emploi/emploi.model';
import { Utilisateur } from '../utilisateur/utilisateur.model';
import { switchMap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit, OnDestroy {

  /*added to resolve build bugs*/
  reactifMotCle  = this.emploiService.getTmpMotCle();  
  reactifSecteur = this.emploiService.getTmpSecteur();  
  reactifPays    = this.emploiService.getTmpPays();
  reactifContrat  = this.emploiService.getTmpContrat();
  reactifRenumeration = this.emploiService.getTmpRenumeration();
  reactifExperience    = this.emploiService.getTmpExperience();
  /*added to resolve build bugs*/
  
  emploiSubscription: Subscription;
  emplois: Emploi[];
  secteurs: Emploi[];
  lieux: Emploi[];
  typeEmplois: Emploi[];
  renumerations: Emploi[];
  experiences: Emploi[];
  emploisGroupedBySecteur: Emploi[];
  nbr_emploi = null;
  utilisateurs: Utilisateur[];
  
  isAuthenticated = false;
  authSubscription: Subscription;
  
  meta: Observable<any>;
  //profileUrl: Observable<string | null>;
  imgPartenaire: string[] = [];
  imgTab: string[];
  
  constructor(
    private emploiService: EmploiService, 
    private inscriptionService: InscriptionService, 
    private utilisateurService: UtilisateurService, 
    public dialog: MatDialog,
    private router:Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
  ) {

  }
  
  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
         this.emplois = emplois; 
         this.nbr_emploi = emplois.length;
         console.log(this.emplois);
         console.log(this.nbr_emploi);
         this.emploisGroupedBySecteur = Object.values(this.groupBy(this.emplois, 'secteur'));
         this.secteurs = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.secteur !== undefined 
          }), 'secteur')); //on filtre les enregistrement undefined avec la fonction .filter puis on applique le groupBy
          this.lieux = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.lieu !== undefined
          }), 'lieu'));
          this.typeEmplois = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.type_contrat !== undefined
          }), 'type_contrat'));
          this.renumerations = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.renumeration !== undefined
          }), 'renumeration'));
          this.experiences = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.experience !== undefined
          }), 'experience'));
         
        });
    this.emploiService.getEmplois();

    jQuery('#Carousel').carousel();
    jQuery('#Carousel2').carousel({
        interval: 5000
    })
    
    /*initialisation du status de connexion*/
    this.isAuthenticated = this.inscriptionService.isAuth();
    this.authSubscription = this.inscriptionService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus; 
      console.log("Bien connecté ! 3")
    });

    this.utilisateurService.utilisateursChanged.subscribe(datas => {
      this.imgPartenaire = [];
      this.imgTab = datas.map(function(value, index, array){ //Retourner les non null
        if (value.image!==undefined && value.type==="super partenaire") {
          return value.image
        }
      });
      
      this.imgTab.forEach(imageRetournee=>{
        if(imageRetournee!==undefined){
          const ref = this.storage.ref('utilisateurs/'+imageRetournee);
          ref.getDownloadURL().subscribe(data =>{
            console.log("bon bon")
            console.log(data)
            this.imgPartenaire.push(data)
          });
        }
        else return "false";
      })
      console.log("obs image >> ");
      console.log(this.imgPartenaire);

    });
    this.utilisateurService.getUtilisateurs();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpInscription, {
      width: '51%'
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
  selected = '';

  onClickChercher(form: NgForm) {
    this.emploiService.setTmpMotCle(form.value.tmpMotCleInput?form.value.tmpMotCleInput:undefined);
    this.emploiService.setTmpSecteur(form.value.tmpSecteurInput?form.value.tmpSecteurInput:undefined);
    this.emploiService.setTmpPays(form.value.tmpPaysInput?form.value.tmpPaysInput:undefined);
    this.emploiService.setTmpContrat(form.value.tmpTypeEmploiInput?form.value.tmpTypeEmploiInput:undefined);
    this.emploiService.setTmpRenumeration(form.value.tmpRenumerationInput?form.value.tmpRenumerationInput:undefined);
    this.emploiService.setTmpExperience(form.value.tmpExperienceInput?form.value.tmpExperienceInput:undefined);
    this.router.navigate(['emploi'], {relativeTo: this.route});
  }

  onClickPrevC1(){
    jQuery('#Carousel').carousel('prev');
  }

  onClickNextC1(){
    jQuery('#Carousel').carousel('next');
  }

  onClickPrevC2(){
    jQuery('#Carousel2').carousel('prev');
  }

  onClickNextC2(){
    jQuery('#Carousel2').carousel('next');
  }

  onClickCompte(){
    this.router.navigate(['compte'], {relativeTo: this.route});
  }

}


/***************** INSCRIPTION POP-UP *********************/



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
  errorStatus : string;

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
      console.log(authStatus)
      this.onNoClick();
      if(this.isAuthenticated){
        this.snackBar.open("Inscription réussite", "", {
          duration: 5000,
        });
      }
    });
    this.inscriptionService.errorChange.subscribe(errorStatus => {
      this.errorStatus = errorStatus;
      
        this.snackBar.open(this.translateMessage(this.errorStatus), "", {
          duration: 5000,
        });
      
    });
  }
  
  translateMessage(message: string){
    switch (message){
        case 'auth/email-already-in-use': { 
            return "Email déja utilisé";
            break; 
        } 
        default: { 
            //statements; 
            break; 
      } 
    }
  
  }
  onSubmitInscription(form: NgForm) {
    this.inscriptionService.inscriptionUtilisateur(
      form.value.nom_utilisateur,
      form.value.email,
      form.value.password
    );
    
  }


}


/***************** CONNEXION POP-UP *********************/


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
      console.log("Bien connecté ! 2")
      if(this.isAuthenticated){
        this.onNoClick();
        this.snackBar.open("Vous êtes connecté", "", {
          duration: 5000,
        });
      }else{
        this.snackBar.open("Vous êtes pas connecté !", "", {
          duration: 5000,
        });
      }
      
    });
  }

  onSubmitConnexion(form: NgForm) {
    this.inscriptionService.connexionUtilisateur(
      form.value.email,
      form.value.password
    );
  }

}