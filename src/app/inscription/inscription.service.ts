import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { Utilisateur } from '../utilisateur/utilisateur.model';
import { UtilisateurService } from '../utilisateur/utilisateur.service'


/*interface Post {
  title: string;
  content: string;
}*/

@Injectable()
export class InscriptionService{
    isAuthenticated = false;
    authChange = new Subject<boolean>();
    errorChange = new Subject<string>();

    constructor(private afAuth: AngularFireAuth, private utilisateurService:UtilisateurService) {
    }

    
    inscriptionUtilisateur(nom_utilisateur: any, email: any, password: any){
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(
            result =>{
                console.log(result.user.uid);
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.utilisateurService.creerUtilisateur(nom_utilisateur, email, result.user.uid)
                
            }
        )
        .catch(
            error =>{
                console.log(error);
                this.errorChange.next(error.code);
            }
        );
    }

    connexionUtilisateur(email: any, password: any){
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
            result => {
                console.log(result.user.uid);
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.utilisateurService.connecterUtilisateur(result.user.uid)
            }
        )
        .catch(
            error =>{
                console.log(error);
            }
        );
    }

    changerMotPasseUtilisateur(email: any, oldPassword: any, newPassword: any){
        
        /*this.afAuth.auth.signInWithEmailAndPassword(email, oldPassword)
        .then(
            result => {
                console.log("connected")
                console.log(result.user)
                result.user.updatePassword(newPassword)
                this.afAuth.auth.updateCurrentUser(result.user)
            }
        )
        .catch(
            error =>{
                console.log("disconnected")
                console.log(error);
            }
        );*/
        return this.afAuth.auth.signInWithEmailAndPassword(email, oldPassword)
    
    }

    updateUtilisateurCourant(result){
        this.afAuth.auth.updateCurrentUser(result)
    }
    isAuth() {
        return this.isAuthenticated;
    }

    

    
}