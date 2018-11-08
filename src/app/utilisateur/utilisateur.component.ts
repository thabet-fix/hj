import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurCompte } from './utilisateurCompte.model';
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
  item: Observable<UtilisateurCompte>;

  ngOnInit() {
    this.item = this.utilisateurService.getUtilisateur();
    this.item.subscribe((datas) => { 
      console.log("datas", datas) 
      this.nom = datas.nom;//ajouter SUbject
      this.prenom = datas.prenom;
      },
      (err)=>{ console.log("probleme : ", err) }
    );
  }

}
