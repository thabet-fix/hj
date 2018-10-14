import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { Utilisateur } from '../shared/utilisateur.model';


/*interface Post {
  title: string;
  content: string;
}*/

@Injectable()
export class InscriptionService{
    isAuthenticated = false;
    authChange = new Subject<boolean>();

    constructor(private afAuth: AngularFireAuth) {
    }

    
    inscriptionUtilisateur(utilisateur: Utilisateur){
        this.afAuth.auth.createUserWithEmailAndPassword(utilisateur.email, utilisateur.password)
        .then(
            result =>{
                console.log(result);
                this.isAuthenticated = true;
                this.authChange.next(true);
            }
        )
        .catch(
            error =>{
                console.log(error);
            }
        );
    }

    connexionUtilisateur(utilisateur: Utilisateur){
        this.afAuth.auth.signInWithEmailAndPassword(utilisateur.email, utilisateur.password)
        .then(
            result => {
                console.log(result);
                this.isAuthenticated = true;
                this.authChange.next(true);
            }
        )
        .catch(
            error =>{
                console.log(error);
            }
        );
    }

    isAuth() {
        return this.isAuthenticated;
    }

    
}