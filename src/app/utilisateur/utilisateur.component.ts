import { Component, OnInit , ViewChild} from '@angular/core';
import { UtilisateurService } from './utilisateur.service';
import { InscriptionService } from '../inscription/inscription.service';
import { Utilisateur } from './utilisateur.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private inscriptionService: InscriptionService, private utilisateurService: UtilisateurService, public snackBar: MatSnackBar, private storage: AngularFireStorage) { }

  @ViewChild('formProfil') formProfil: NgForm;
  typeContrat: string;
  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur;
  resumeAF: string;
  axeAF: string;
  dureeSivpAF: number = 10;
  utilisateurCourant: any;
  dureeSivpStatus : boolean = true;
  
  uploadCvPercent: Observable<number>;
  cvUtilisateurAF: Observable<string | null>;
  downloadCvURLChanged: Observable<string>;
  downloadCvURLInitial: string;
  config = new MatSnackBarConfig()
  urlCv: string;
  imgProfil: string;
  imgTab: string[];
  urlImgProfil: string;
  afficheProgress: boolean = false;

  ngOnInit() {
    //this.utilisateur.$key = undefined;
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateurs = datas;
      this.utilisateur = this.utilisateurs[0];
      this.typeContrat = this.utilisateur.type_contrat;
      this.utilisateurService.setDocUtilisateurId(this.utilisateur.$key);
      this.resumeAF = this.utilisateur.resume;
      this.axeAF = this.utilisateur.axe_motivation;
      this.dureeSivpStatus = this.utilisateur.sivp;
      this.dureeSivpAF = this.utilisateur.duree_sivp;
      // TO DO Changer mot de passe
      //this.inscriptionService.changerMotPasseUtilisateur("thabet_jmal@yahoo.fr", "thabet", "azerty")
      this.urlCv = this.utilisateur.cv;
      this.urlImgProfil = this.utilisateur.image;
       /********** Get CV */
      /*const refCv = this.storage.ref('users/davideast.jpg');
      this.cvUtilisateurAF = refCv.getDownloadURL();*/
      
        
      const refProfil = this.storage.ref('utilisateurs/'+this.utilisateur.nom_utilisateur+'/image-profil-'+this.utilisateur.nom_utilisateur);
      refProfil.getDownloadURL().subscribe(data =>{
        this.imgProfil = data;
      });

      const refCv = this.storage.ref('utilisateurs/'+this.utilisateur.nom_utilisateur+'/cv-'+this.utilisateur.nom_utilisateur);
      refCv.getDownloadURL().subscribe(data =>{
        this.downloadCvURLInitial = data;
      });        
      
      
    });
    this.utilisateurService.getUtilisateurDev();
    this.config.duration = 5000;    
     
  }
  
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'utilisateurs/'+this.utilisateur.nom_utilisateur+'/cv-'+this.utilisateur.nom_utilisateur;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
     // observe percentage changes
    this.uploadCvPercent = task.percentageChanges();

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
        this.downloadCvURLChanged = fileRef.getDownloadURL();
        this.afficheProgress = false;
        }
      )
     )
    .subscribe(data =>{
      this.downloadCvURLInitial = undefined;
      this.afficheProgress = true;
    })
  }
  changeImageProfil(event) {
    const file = event.target.files[0];
    const filePath = 'utilisateurs/'+this.utilisateur.nom_utilisateur+'/image-profil-'+this.utilisateur.nom_utilisateur;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
     // observe percentage changes
    this.uploadCvPercent = task.percentageChanges();

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
        fileRef.getDownloadURL().subscribe(data =>{
          this.imgProfil = data;
        });
        }
      )
     )
    .subscribe()
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }

  onChangeSivp(event){
    
  }

  onClickStatusSivp(){
    this.dureeSivpStatus=!this.dureeSivpStatus; 
    if(!this.dureeSivpStatus){this.dureeSivpAF=0}
  }

  afficherNotification(message: string, couleur: string){
    this.config.panelClass = [couleur];
    this.snackBar.open(message, undefined, this.config);
  }
  
  modifierUtilisateur(){
    this.utilisateurService.modifierUtilisateur(this.utilisateur).then(
        result => {
            this.afficherNotification('Sauvegardé', 'background-verte');
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Sauvegarde non réussi', 'background-rouge');
        }
    );
  }

  onClickEnregistrerResume(form: NgForm){
    this.utilisateur.resume = form.value.resume;
    this.modifierUtilisateur();
  }

  onClickMettreAJour(){
    this.utilisateur.resume = this.formProfil.value.resume;
    this.utilisateur.axe_motivation = this.formProfil.value.axeMotivation;
    this.utilisateur.sivp = this.dureeSivpStatus;
    this.utilisateur.duree_sivp = this.dureeSivpAF;
    this.modifierUtilisateur();
  }

  onClickTypeContrat(typeContratPassed: string){
    this.utilisateur.type_contrat = typeContratPassed;
    this.modifierUtilisateur();
  }

} 
