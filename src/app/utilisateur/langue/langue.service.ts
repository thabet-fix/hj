import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Langue } from './langue.model';
import { Utilisateur } from '../utilisateur.model';
import 'rxjs/add/operator/map';

@Injectable()
export class LangueService{
    
    constructor(private afs: AngularFirestore) {
    }
    languesLocalTmp : Langue[];
    languesChanged = new Subject<Langue[]>();
    languesDisponibleChanged = new Subject<Langue[]>();
    langueLocalTmp : Langue[];
    langueChanged = new Subject<Langue[]>();

    getLangues(docUtilisateurId: any){
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('langues')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({
                    $key: action.payload.doc.id,
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.languesLocalTmp = response;
                    this.languesChanged.next([...this.languesLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getLangue(docUtilisateurId: any, docEducationId: any) : Observable<Langue>{
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Langue>('langues').doc<Langue>(docEducationId).valueChanges();
    }
    
    ajouterLangue(docUtilisateurId: any, langue: Langue){
        let langueJSON = JSON.parse(JSON.stringify(langue))
        console.log(langue)
        console.log(langueJSON)
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Langue>('langues').add(langueJSON);
    }

    supprimerLangue(docUtilisateurId: any, docLangueId: any){
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Langue>('langues').doc(docLangueId).delete();
    }

    modifierLangue(docUtilisateurId: any, docLangueId: any, langue: Langue){
        let langueJSON = JSON.parse(JSON.stringify(langue))
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('langues').doc(docLangueId).update(langueJSON);
    }

    getLanguesDisponible(){
        return this.afs.collection<any>('langues_disponibles')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.languesDisponibleChanged.next([...response]); // spread operator to create a copy
                }
            );
    }

}