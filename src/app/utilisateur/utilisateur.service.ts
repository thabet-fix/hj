import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Utilisateur } from '../shared/utilisateur.model';


@Injectable()
export class UtilisateurService{
    
    constructor(private afs: AngularFirestore) {
    }

    tmpIdUtilisateur: any;
    utilisateursLocalTmp : Utilisateur[];
    utilisateursChanged = new Subject<Utilisateur[]>();
    utilisateurLocalTmp : Utilisateur[];
    utilisateurChanged = new Subject<Utilisateur[]>();

    getUtilisateurs(){
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection<any>('utilisateurs')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Utilisateur[]) => {
                    this.utilisateursLocalTmp = response;
                    this.utilisateursChanged.next([...this.utilisateursLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getUtilisateur(){
        return this.afs.collection<any>('utilisateurs', ref => ref.where('id', '==', this.tmpIdUtilisateur))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ $key: action.payload.doc.id, ...action.payload.doc.data() }));
            })
            .subscribe(
                (response: Utilisateur[]) => {
                    this.utilisateurLocalTmp = response;
                    this.utilisateurChanged.next([...this.utilisateurLocalTmp]); // spread operator to create a copy
                }
            );
    }

    creerUtilisateur(email: any, id: any){
        const listeUtilisateurs = this.afs.collection<any>('utilisateurs');
        listeUtilisateurs.add({ email: email, id: id });
        this.tmpIdUtilisateur = id;
    }

}