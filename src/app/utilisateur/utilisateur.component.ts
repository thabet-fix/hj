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
  statusCv: boolean = false;
  imgProfil: string;
  imgTab: string[];
  urlImgProfil: string;
  afficheProgress: boolean = false;
  statusCompte: boolean = false;

  ngOnInit() {

    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      this.utilisateurs = datas;
      this.utilisateur = this.utilisateurs[0];
      this.typeContrat = this.utilisateur.type_contrat;
      this.utilisateurService.setDocUtilisateurId(this.utilisateur.$key);
      this.resumeAF = this.utilisateur.resume;
      this.axeAF = this.utilisateur.axe_motivation;
      this.dureeSivpStatus = this.utilisateur.sivp;
      this.dureeSivpAF = this.utilisateur.duree_sivp;
      this.statusCv = this.utilisateur.cv;
      this.urlImgProfil = this.utilisateur.image;
      this.statusCompte = this.utilisateur.status;      
        
      const refProfil = this.storage.ref('utilisateurs/'+this.utilisateur.nom_utilisateur+'/image-profil-'+this.utilisateur.nom_utilisateur);
      refProfil.getDownloadURL().subscribe(data =>{
        this.imgProfil = data;
      },
      error=>{
        this.imgProfil = "assets/images/avatar.png"
      });

      if(this.statusCv){
        const refCv = this.storage.ref('utilisateurs/'+this.utilisateur.nom_utilisateur+'/cv-'+this.utilisateur.nom_utilisateur);
        refCv.getDownloadURL().subscribe(data =>{
          this.downloadCvURLInitial = data;
        });
      }        
      
      
    });
    this.utilisateurService.getUtilisateurDev();
    //this.utilisateurService.getUtilisateur();
    this.config.duration = 5000;    
     
  }
  onClickSupprimerCompte(){
    this.statusCompte =!this.statusCompte;
    this.utilisateur.status = this.statusCompte;
    this.modifierUtilisateur();
  }

  onClickModifierMotPasse(){
    this.inscriptionService.changerMotPasseUtilisateur(this.utilisateur.email, this.formProfil.value.ancienMotDePasse, this.formProfil.value.newMotDePasse)
    .then(
        result1 => {
            result1.user.updatePassword(this.formProfil.value.newMotDePasse).then(result =>{
                this.inscriptionService.updateUtilisateurCourant(result1.user);
                this.afficherNotification('Mot de passe Modifié', 'background-verte');
                this.formProfil.controls['ancienMotDePasse'].setValue('');
                this.formProfil.controls['newMotDePasse'].setValue('');
              }
            )
            .catch(error=>{
                this.afficherNotification('Entrer un nouveau mot de passe valide', 'background-rouge');
            })
            
        }
    )
    .catch(
        error =>{
            this.afficherNotification('Ancien mot de passe invalide', 'background-rouge');
        }
    );
  }
  onClickSupprimerCV(event){
    const filePath = 'utilisateurs/'+this.utilisateur.nom_utilisateur+'/cv-'+this.utilisateur.nom_utilisateur;
    const fileRef = this.storage.ref(filePath).delete();
    this.downloadCvURLInitial = undefined;
    this.downloadCvURLChanged = undefined;
    this.utilisateur.cv = false;
    this.modifierUtilisateur();
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
        console.log("votre cv")
        console.log(this.downloadCvURLInitial)
        this.downloadCvURLInitial = undefined;
        this.afficheProgress = false;
        this.utilisateur.cv = true;
        this.modifierUtilisateur();
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
