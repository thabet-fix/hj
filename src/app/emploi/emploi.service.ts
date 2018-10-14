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

    
}