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

  @ViewChild(NgForm) formProfil: NgForm;
  typeContrat: string;
  prenom: string;
  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur;
  inputResume: string;

  ngOnInit() {
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateurs = datas;
      this.utilisateur = this.utilisateurs[0];
      this.typeContrat = this.utilisateur.type_contrat;
      this.utilisateurService.setDocUtilisateurId(this.utilisateur.$key);
      console.log("utl init >> ")
      console.log(this.utilisateur)

    });
    
    this.utilisateurService.getUtilisateur();
  }

  onClickEnregistrerResume(form: NgForm){
    this.utilisateur.resume = form.value.resume;
    console.log("Motivation >> "+this.utilisateur.axe_motivation);
    this.utilisateurService.modifierUtilisateur(this.utilisateur);
  }

  onClickMettreAJour(){
    this.utilisateur.resume = this.formProfil.value.resume;
    this.utilisateur.axe_motivation = this.formProfil.value.axeMotivation;
    this.utilisateurService.modifierUtilisateur(this.utilisateur);
  }

  onClickTypeContrat(typeContrat: string){
    console.log("utl before clk >> ")
    console.log(this.utilisateur)
    console.log("utl after clk >> ")
    this.utilisateur.type_contrat = typeContrat;
    console.log(this.utilisateur)

    this.utilisateurService.modifierUtilisateur(this.utilisateur)
  }

}
