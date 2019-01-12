import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Technologie } from './technologie.model';
import { Utilisateur } from '../utilisateur.model';


@Injectable()
export class TechnologieService{
    
    constructor(private afs: AngularFirestore) {
    }
    technologiesLocalTmp : Technologie[];
    technologiesChanged = new Subject<Technologie[]>();
    technologieLocalTmp : Technologie[];
    technologieChanged = new Subject<Technologie[]>();
    technologiesDisponibleChanged = new Subject<Technologie[]>();

    getTechnologies(docUtilisateurId: any){
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('technologies', ref => ref.orderBy('pourcentage'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id,
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.technologiesLocalTmp = response;
                    this.technologiesChanged.next([...this.technologiesLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getTechnologie(docUtilisateurId: any, docTechnologieId: any) : Observable<Technologie>{
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Technologie>('technologies').doc<Technologie>(docTechnologieId).valueChanges();
    }
    
    ajouterTechnologie(docUtilisateurId: any, technologie: Technologie){
        let technologieJSON = JSON.parse(JSON.stringify(technologie))
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Technologie>('technologies').add(technologieJSON);
    }

    supprimerTechnologie(docUtilisateurId: any, docTechnologieId: any){
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Technologie>('technologies').doc(docTechnologieId).delete();
    }

    modifierTechnologie(docUtilisateurId: any, docTechnologieId: any, technologie: Technologie){
        let technologieJSON = JSON.parse(JSON.stringify(technologie))
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('technologies').doc(docTechnologieId).update(technologieJSON);
    }

    getTechnologiesDisponible(){ //From Administrator Database
        return this.afs.collection<any>('technologies_disponibles')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.technologiesDisponibleChanged.next([...response]); // spread operator to create a copy
                }
            );
    }

    ajouterTechnologieDisponible(technologieDisponible: string){
        return this.afs.collection('technologies_disponibles').add({'titre': technologieDisponible});
    }

}