import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from '../shared/utilisateur.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  constructor(private utilisateurService: UtilisateurService) { }

  nom: string;
  prenom: string;
  utilisateurs: Utilisateur[];
  utilisateur: Utilisateur;

  ngOnInit() {
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateurs = datas;
      this.utilisateur = this.utilisateurs[0];
    });
    this.utilisateurService.getUtilisateur();
  }

}
