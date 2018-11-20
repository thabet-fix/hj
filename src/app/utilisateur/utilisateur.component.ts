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
  originUtilisateur: Utilisateur;
  inputResume: string;

  ngOnInit() {
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateurs = datas;
      this.originUtilisateur = this.utilisateurs[0];
      this.typeContrat = this.originUtilisateur.type_contrat;
      this.utilisateurService.setDocUtilisateurId(this.originUtilisateur.$key);
      console.log("utl init >> ")
      console.log(this.originUtilisateur)
      this.utilisateur = this.originUtilisateur;
      //this.initUtilisateur()
    });
    
    this.utilisateurService.getUtilisateur();
    //this.utilisateur = this.originUtilisateur;
  }

  initUtilisateur(){

    console.log("Object >> ")
    console.log(this.formProfil)
    console.log("Motivation 0 >> ")
    console.log(this.formProfil.value.axeMotivation)
    //this.utilisateur['resume'] = this.formProfil.value.resume;
    console.log("Motivation 1 >> ")
    console.log(this.formProfil.value.resume)
    //this.utilisateur['axe_motivation'] = this.formProfil.value.axeMotivation;
    console.log("Motivation 2 >> ")
    console.log(this.formProfil.value.resume3)
  }
  changeValeur( desc, value ) {
    for (var i in this.utilisateur) {
      if (this.utilisateur[i].value == value) {
        this.utilisateur[i].desc = desc;
         break; //Stop this loop, we found it!
      }
    }
 }
  onClickEnregistrerResume(form: NgForm){
    this.initUtilisateur()
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
