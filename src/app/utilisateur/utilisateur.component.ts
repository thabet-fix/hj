import { Component, OnInit , ViewChild} from '@angular/core';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../shared/utilisateur.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }

  @ViewChild('formProfil') formProfil: NgForm;
  typeContrat: string;
  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur;
  resumeAF: string;
  axeAF: string;

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
  }

  onClickEnregistrerResume(form: NgForm){
    /******** TODO axe-motivation */
    this.utilisateur.resume = form.value.resume;
    this.utilisateurService.modifierUtilisateur(this.utilisateur);
  }

  onClickMettreAJour(){
    this.utilisateur.resume = this.formProfil.value.resume;
    this.utilisateur.axe_motivation = this.formProfil.value.axeMotivation;
    this.utilisateurService.modifierUtilisateur(this.utilisateur);
  }

  onClickTypeContrat(typeContrat: string){
    this.utilisateur.type_contrat = typeContrat;
    this.utilisateurService.modifierUtilisateur(this.utilisateur)
  }

}
