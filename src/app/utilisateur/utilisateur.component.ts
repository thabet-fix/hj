import { Component, OnInit , ViewChild} from '@angular/core';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../shared/utilisateur.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService, public snackBar: MatSnackBar) { }

  @ViewChild('formProfil') formProfil: NgForm;
  typeContrat: string;
  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur;
  resumeAF: string;
  axeAF: string;
  
  config = new MatSnackBarConfig();

  ngOnInit() {
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateurs = datas;
      this.utilisateur = this.utilisateurs[0];
      this.typeContrat = this.utilisateur.type_contrat;
      this.utilisateurService.setDocUtilisateurId(this.utilisateur.$key);
      this.resumeAF = this.utilisateur.resume;
      this.axeAF = this.utilisateur.axe_motivation;
    });
    this.utilisateurService.getUtilisateur();
    
    this.config.panelClass = ['background-verte'];
    this.config.duration = 5000;
    
  }

  afficherNotification(){
    this.snackBar.open("Sauvegardé", undefined, this.config);
  }
  afficherNotificationNon(){
    this.snackBar.open("Non sauvegardé", undefined, this.config);
  }
  onClickEnregistrerResume(form: NgForm){
    this.utilisateur.resume = form.value.resume;
    this.utilisateurService.modifierUtilisateur(this.utilisateur);
    this.afficherNotification();
  }

  onClickMettreAJour(){
    this.utilisateur.resume = this.formProfil.value.resume;
    this.utilisateur.axe_motivation = this.formProfil.value.axeMotivation;
    let etat:boolean = this.utilisateurService.modifierUtilisateur(this.utilisateur);
    if(etat){
      this.afficherNotification();
    }else{
      this.afficherNotificationNon();
    }
    
  }

  onClickTypeContrat(typeContratPassed: string){
    this.utilisateur.type_contrat = typeContratPassed;
    this.utilisateurService.modifierUtilisateur(this.utilisateur)
    this.afficherNotification();
  }

}
