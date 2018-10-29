import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploiService } from './emploi.service';
import { Emploi } from './emploi.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.scss']
})
export class EmploiComponent implements OnInit {

  constructor(private emploiService: EmploiService) { }

  tmpMotCle: String;
  tmpSecteur: String;
  tmpPays: String;
  emplois: Emploi[];
  emploiSubscription: Subscription;
  secteurs: Emploi[];
  lieux: Emploi[];
  typeEmplois: Emploi[];
  renumerations: Emploi[];
  experiences: Emploi[];
  
  reactifMotCle  = this.emploiService.getTmpMotCle();
  reactifSecteur = this.emploiService.getTmpSecteur();
  reactifPays    = this.emploiService.getTmpPays();
  
  @ViewChild(NgForm) formFiltreEmploi: NgForm;

  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
          this.emplois = emplois; 
          this.secteurs = Object.values(this.groupBy(this.emplois.filter(data => {
            if (data.secteur !== undefined) {
              /*if (this.emplois.indexOf(data.secteur)){
                return false
              }*/
              /*else*/ return true
            }
            else return false
          }), 'secteur')); //on filtre les enregistrement undefined avec la fonction .filter puis on applique le groupBy
          this.lieux = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.lieu !== undefined
          }), 'lieu'));
          this.typeEmplois = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.type_contrat !== undefined
          }), 'type_contrat'));
          this.renumerations = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.renumeration !== undefined
          }), 'renumeration'));
          this.experiences = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.experience !== undefined
          }), 'experience'));
        });
    

    this.emploiService.getEmplois();
    
  }
  
  /*
  onClickChercher(form: NgForm) {
    this.emploiService.getEmploisParCritere(
      form.value.tmpMotCleInput?form.value.tmpMotCleInput:"",
      form.value.tmpSecteurInput?form.value.tmpSecteurInput:"",
      form.value.tmpPaysInput?form.value.tmpPaysInput:""
    );
  }*/

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

}
