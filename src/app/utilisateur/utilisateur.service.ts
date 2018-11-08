import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { UtilisateurCompte } from './utilisateurCompte.model';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable()
export class UtilisateurService{
    
    constructor(private afs: AngularFirestore) {
    }

    tmpIdUtilisateur: any = "q5sBtWfyWnPE6F7kZsbl";
    utilisateursLocalTmp : UtilisateurCompte[];
    utilisateursChanged = new Subject<UtilisateurCompte[]>();

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
                (response: UtilisateurCompte[]) => {
                    this.utilisateursLocalTmp = response;
                    this.utilisateursChanged.next([...this.utilisateursLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getUtilisateur(){
        return this.afs.doc<any>('utilisateurs/'+this.tmpIdUtilisateur).valueChanges();
    }

}