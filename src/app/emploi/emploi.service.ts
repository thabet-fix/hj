import { AngularFirestore } from '@angular/fire/firestore';

import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { Emploi } from './emploi.model';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable()
export class EmploiService{
    emploisLocalTmp : Emploi[];
    emploisChanged = new Subject<Emploi[]>();
    nbrEmploisChanged = new Subject<Emploi[]>();
    secteur$: BehaviorSubject<string|null>;

    tmpMotCle: String;
    tmpSecteur: String;
    tmpPays: String;
    tmpContrat: String;
    tmpRenumeration: String;
    tmpExperience: String;

    constructor(private afs: AngularFirestore) {
    }

    getEmplois(){
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection<any>('emplois')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Emploi[]) => {
                    this.emploisLocalTmp = response;
                    this.emploisChanged.next([...this.emploisLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getEmploisParSecteur(){
        return this.afs.collection<any>('emplois', ref => ref.where('secteur', '==', 'Développement Mobile'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Emploi[]) => {
                    this.emploisLocalTmp = response;
                    this.emploisChanged.next([...this.emploisLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getEmploisParCritere(motCle: String, secteur: String, pays:String) {
      
        // return this.afs.collection<any>('emplois', ref => ref.where('titre', '==', motCle?motCle:null).where('secteur', '==', secteur?secteur:null).where('lieu', '==', pays?pays:null))
        return this.afs.collection<any>('emplois', ref => 
            {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            if (motCle!=="") { query = query.where('titre', '==', motCle) };
            if (secteur!=="") { query = query.where('secteur', '==', secteur) };
            if (pays!=="") { query = query.where('lieu', '==', pays) };
            return query;
          })
        
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Emploi[]) => {
                    this.emploisLocalTmp = response;
                    this.emploisChanged.next([...this.emploisLocalTmp]); // spread operator to create a copy
                }
            );

            
    }

    getTmpMotCle(){
        return this.tmpMotCle;
    }
    getTmpSecteur(){
        return this.tmpSecteur;
    }
    getTmpPays(){
        return this.tmpPays;
    }
    getTmpContrat(){
        return this.tmpContrat;
    }
    getTmpRenumeration(){
        return this.tmpRenumeration;
    }
    getTmpExperience(){
        return this.tmpExperience;
    }

    setTmpMotCle(tmpMotCle: String){
        this.tmpMotCle = tmpMotCle;
    }
    setTmpSecteur(tmpSecteur: String){
        this.tmpSecteur = tmpSecteur;
    }
    setTmpPays(tmpPays: String){
        this.tmpPays = tmpPays;
    }
    setTmpContrat(tmpContrat: String){
        this.tmpContrat = tmpContrat;
    }
    setTmpRenumeration(tmpRenumeration: String){
        this.tmpRenumeration = tmpRenumeration;
    }
    setTmpExperience(tmpExperience: String){
        this.tmpExperience = tmpExperience;
    }

    
}