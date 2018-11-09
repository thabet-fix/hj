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
  utilisateur: Utilisateur[];

  ngOnInit() {
    this.utilisateurService.utilisateurChanged.subscribe(datas => {
      console.log(datas)
      this.utilisateur = datas;
    });
    this.utilisateurService.getUtilisateur();
  }

}
