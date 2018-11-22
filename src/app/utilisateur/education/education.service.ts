import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Education } from './education.model';


@Injectable()
export class EducationService{
    
    constructor(private afs: AngularFirestore) {
    }
    educationsLocalTmp : Education[];
    educationsChanged = new Subject<Education[]>();
    educationLocalTmp : Education[];
    educationChanged = new Subject<Education[]>();

    getEducations(docUtilisateurId: any){
        //return this.afs.collection('emplois').valueChanges();
        return this.afs.collection<any>('utilisateurs').doc(docUtilisateurId).collection('educations')
        .snapshotChanges()
            .map(actions => {
                return actions.map(action => ({ 
                    $key: action.payload.doc.id, 
                    ...action.payload.doc.data() 
                }));
            })
            .subscribe(
                (response: Education[]) => {
                    this.educationsLocalTmp = response;
                    this.educationsChanged.next([...this.educationsLocalTmp]); // spread operator to create a copy
                }
            );
    }
    
    ajouterEducation(docUtilisateurId: any, education: Education){
        return this.afs.collection('utilisateurs').doc(docUtilisateurId).collection('educations').add(education);
    }

}