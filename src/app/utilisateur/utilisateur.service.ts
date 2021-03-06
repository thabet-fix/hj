import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Utilisateur } from './utilisateur.model';


@Injectable()
export class UtilisateurService{
    
    constructor(private afs: AngularFirestore) {
    }

    tmpIdUtilisateur: any;
    docUtilisateurId: string;
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
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Utilisateur[]) => {
                    this.utilisateurLocalTmp = response;
                    this.utilisateurChanged.next([...this.utilisateurLocalTmp]);
                }
            );
            
    }

    getUtilisateurDev(){
        return this.afs.collection<any>('utilisateurs', ref => ref.where('id', '==', 'QR7DZXIF8hR1x6vwc8MlmOtfAt22'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Utilisateur[]) => {
                    this.utilisateurLocalTmp = response;
                    this.utilisateurChanged.next([...this.utilisateurLocalTmp]);
                }
            );
            
    }

    setDocUtilisateurId(id: any){
        this.docUtilisateurId = id; // On n'utilise plus l'id d'authentification, on utilise le key de document utilisateur
    }

    getDocUtilisateurId(){
        return this.docUtilisateurId; // On n'utilise plus l'id d'authentification, on utilise le key de document utilisateur
    }

    creerUtilisateur(nom_utilisateur:any, email: any, id: any){
        const listeUtilisateurs = this.afs.collection<any>('utilisateurs');
        listeUtilisateurs.add({nom_utilisateur: nom_utilisateur, email: email, id: id });
        this.tmpIdUtilisateur = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getUtilisateur()
    }

    connecterUtilisateur(id: string){
        this.tmpIdUtilisateur = id; // On retourne l'id utilisée par l'autentification pour l'utiliser après pour getUtilisateur()
    }

    modifierUtilisateur(utilisateur: Utilisateur){
        return this.afs.collection('utilisateurs').doc(this.getDocUtilisateurId()).update(utilisateur)
    }

}