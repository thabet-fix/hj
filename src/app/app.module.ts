import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';


/************** Import des components ************/
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PopUpInscription, PopUpConnexion } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { EmploiComponent } from './emploi/emploi.component';
import { NotificationComponent } from './notification/notification.component'; 

/************** Import de Material ***************/
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/************** Import de Firebase/Firestore *******/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

/************** Import des services ****************/
import { DataExchangeService } from './shared/data-exchange.service';
import { EmploiService } from './emploi/emploi.service';
import { InscriptionService } from './inscription/inscription.service';

import { Routes, RouterModule } from "@angular/router";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const appRoutes: Routes= [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'emploi', component: EmploiComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyBoYsMF0LD_ZR_oR-2ai_LV6JVh3MuF3SY",
    authDomain: "hellojob-2d944.firebaseapp.com",
    databaseURL: "https://hellojob-2d944.firebaseio.com",
    projectId: "hellojob-2d944",
    storageBucket: "hellojob-2d944.appspot.com",
    messagingSenderId: "25445548653"
};

@NgModule({
  declarations: [
    PopUpInscription,
    PopUpConnexion,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChatComponent,
    FooterComponent,
    EmploiComponent,
    NotificationComponent,
    UtilisateurComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,    
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    DataExchangeService, 
    EmploiService,
    InscriptionService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  entryComponents: [
    PopUpInscription,
    PopUpConnexion,
    NotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
