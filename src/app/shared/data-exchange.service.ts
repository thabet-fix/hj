import { AngularFirestore } from '@angular/fire/firestore';

import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class DataExchangeService{

    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    }

    

    
}