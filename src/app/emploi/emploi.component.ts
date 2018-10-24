import { Component, OnInit } from '@angular/core';
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
  nbr_emploi = null;
  secteurs: Emploi[];
  lieux: Emploi[];

  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
          this.emplois = emplois; 
          this.secteurs = Object.values(this.groupBy(this.emplois, 'secteur'));
          this.lieux = Object.values(this.groupBy(this.emplois, 'lieu'));
          this.nbr_emploi = emplois.length;
        });
    this.tmpMotCle = this.emploiService.getTmpMotCle();
    this.tmpSecteur = this.emploiService.getTmpSecteur();
    this.tmpPays = this.emploiService.getTmpPays();
    if(this.tmpMotCle==null && this.tmpSecteur==null && this.tmpPays==null){
      this.emploiService.getEmplois();
    } else {
      this.emploiService.getEmploisParCritere(this.tmpMotCle,this.tmpSecteur,this.tmpPays);
    }
    
  }

  onClickChercher(form: NgForm) {
    this.emploiService.getEmploisParCritere(
      form.value.tmpMotCleInput?form.value.tmpMotCleInput:"",
      form.value.tmpSecteurInput?form.value.tmpSecteurInput:"",
      form.value.tmpPaysInput?form.value.tmpPaysInput:""
    );
  }

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

}
