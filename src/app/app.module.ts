import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 
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
import { MatIconModule, MatChipsModule, MatPaginatorIntl, PageEvent, MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatNativeDateModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';

/************** Import de Firebase/Firestore *******/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

/************** Import des services ****************/
import { DataExchangeService } from './shared/data-exchange.service';
import { EmploiService } from './emploi/emploi.service';
import { InscriptionService } from './inscription/inscription.service';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { EducationService } from './utilisateur/education/education.service';
import { ExperienceService } from './utilisateur/experience/experience.service';

import { Routes, RouterModule } from "@angular/router";
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FiltrePipe } from './emploi/filtre.pipe';
import { EmploiDetailComponent } from './emploi/emploi-detail/emploi-detail.component';
import { EducationComponent } from './utilisateur/education/education.component';
import { ExperienceComponent } from './utilisateur/experience/experience.component';
import { LangueComponent } from './utilisateur/langue/langue.component';
import { LangueService } from './utilisateur/langue/langue.service';
import { TechnologieComponent } from './utilisateur/technologie/technologie.component';
import { TechnologieService } from './utilisateur/technologie/technologie.service';
import { RenumerationComponent } from './utilisateur/renumeration/renumeration.component';
import { RenumerationService } from './utilisateur/renumeration/renumeration.service';

const appRoutes: Routes= [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'emploi', component: EmploiComponent },
  { path: 'emploi/fiche/:id', component: EmploiDetailComponent },
  { path: 'compte', component: UtilisateurComponent }
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
    InscriptionComponent,
    FiltrePipe,
    EmploiDetailComponent,
    EducationComponent,
    ExperienceComponent,
    LangueComponent,
    TechnologieComponent,
    RenumerationComponent
  ],
  imports: [
    MatSortModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatSliderModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,    
    AngularFireStorageModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    MatDatepickerModule,
    DataExchangeService, 
    EmploiService,
    InscriptionService,
    UtilisateurService,
    EducationService,
    ExperienceService,
    TechnologieService,
    LangueService,
    RenumerationService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MatPaginatorIntl, useClass: EmploiComponent},
    {provide: StorageBucket, useValue: 'hellojob-2d944.appspot.com'}
  ],
  entryComponents: [
    PopUpInscription,
    PopUpConnexion,
    NotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
