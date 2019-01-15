import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Renumeration } from './renumeration.model';
import { Utilisateur } from '../utilisateur.model';
import 'rxjs/add/operator/map';

@Injectable()
export class RenumerationService{
    
    constructor(private afs: AngularFirestore) {
    }
    renumerationsLocalTmp : Renumeration[];
    renumerationsChanged = new Subject<Renumeration[]>();
    renumerationsDisponibleChanged = new Subject<Renumeration[]>();
    renumerationLocalTmp : Renumeration[];
    renumerationChanged = new Subject<Renumeration[]>();

    getRenumerations(docUtilisateurId: any){
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('renumerations', ref => ref.orderBy('titre_renumeration'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({
                    $key: action.payload.doc.id,
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.renumerationsLocalTmp = response;
                    this.renumerationsChanged.next([...this.renumerationsLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getRenumeration(docUtilisateurId: any, docEducationId: any) : Observable<Renumeration>{
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Renumeration>('renumerations').doc<Renumeration>(docEducationId).valueChanges();
    }
    
    ajouterRenumeration(docUtilisateurId: any, renumeration: Renumeration){
        let renumerationJSON = JSON.parse(JSON.stringify(renumeration))
        console.log(renumeration)
        console.log(renumerationJSON)
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Renumeration>('renumerations').add(renumerationJSON);
    }

    supprimerRenumeration(docUtilisateurId: any, docRenumerationId: any){
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Renumeration>('renumerations').doc(docRenumerationId).delete();
    }

    modifierRenumeration(docUtilisateurId: any, docRenumerationId: any, renumeration: Renumeration){
        let renumerationJSON = JSON.parse(JSON.stringify(renumeration))
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('renumerations').doc(docRenumerationId).update(renumerationJSON);
    }

    getRenumerationsDisponible(){ //From Administrator Database
        return this.afs.collection<any>('renumerations_disponibles', ref => ref.orderBy("titre"))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.renumerationsDisponibleChanged.next([...response]); // spread operator to create a copy
                }
            );
    }

}