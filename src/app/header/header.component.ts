import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { InscriptionService } from '../inscription/inscription.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopUpConnexion, PopUpInscription } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  authSubscription: Subscription;

  constructor(private inscriptionService:InscriptionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.authSubscription = this.inscriptionService.authChange.subscribe(authStatus => {
      this.isAuthenticated = authStatus;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpInscription, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}
