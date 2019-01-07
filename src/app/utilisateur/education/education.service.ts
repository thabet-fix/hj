import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Education } from './education.model';
import { Utilisateur } from '../utilisateur.model';


@Injectable()
export class EducationService{
    
    constructor(private afs: AngularFirestore) {
    }
    educationsLocalTmp : Education[];
    educationsChanged = new Subject<Education[]>();
    educationLocalTmp : Education[];
    educationChanged = new Subject<Education[]>();

    getEducations(docUtilisateurId: any){
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('educations', ref => ref.orderBy('date_fin'))
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id,
                    date_debut: action.payload.doc.data().date_debut,
                    date_fin:   action.payload.doc.data().date_fin,
                    ...action.payload.doc.data()
                }));
            })
            .subscribe(
                (response: any[]) => {
                    this.educationsLocalTmp = response;
                    this.educationsChanged.next([...this.educationsLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getEducation(docUtilisateurId: any, docEducationId: any) : Observable<Education>{
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Education>('educations').doc<Education>(docEducationId).valueChanges();
    }
    
    ajouterEducation(docUtilisateurId: any, education: Education){
        let educationJSON = JSON.parse(JSON.stringify(education))
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Education>('educations').add(educationJSON);
        
    }

    supprimerEducation(docUtilisateurId: any, docEducationId: any){
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Education>('educations').doc(docEducationId).delete();
    }

    modifierEducation(docUtilisateurId: any, docEducationId: any, education: Education){
        let educationJSON = JSON.parse(JSON.stringify(education))
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').doc(docEducationId).update(educationJSON);
    }

}