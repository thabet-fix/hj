import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { Experience } from './experience.model';
import { Utilisateur } from '../utilisateur.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ExperienceService{
    
    constructor(private afs: AngularFirestore) {
    }
    experiencesLocalTmp : Experience[];
    experiencesChanged = new Subject<Experience[]>();
    experienceLocalTmp : Experience[];
    experienceChanged = new Subject<Experience[]>();

    getExperiences(docUtilisateurId: any){
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('experiences')
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
                    this.experiencesLocalTmp = response;
                    this.experiencesChanged.next([...this.experiencesLocalTmp]); // spread operator to create a copy
                }
            );
    }

    getExperience(docUtilisateurId: any, docEducationId: any) : Observable<Experience>{
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Experience>('experiences').doc<Experience>(docEducationId).valueChanges();
    }
    
    ajouterExperience(docUtilisateurId: any, experience: Experience){
        let experienceJSON = JSON.parse(JSON.stringify(experience))
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Experience>('experiences').add(experienceJSON);
    }

    supprimerExperience(docUtilisateurId: any, docExperienceId: any){
        return this.afs.collection<Utilisateur>('utilisateurs').doc(docUtilisateurId).collection<Experience>('experiences').doc(docExperienceId).delete();
    }

    modifierExperience(docUtilisateurId: any, docExperienceId: any, experience: Experience){
        let experienceJSON = JSON.parse(JSON.stringify(experience))
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('experiences').doc(docExperienceId).update(experienceJSON);
    }

}