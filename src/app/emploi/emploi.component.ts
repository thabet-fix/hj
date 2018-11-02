import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploiService } from './emploi.service';
import { Emploi } from './emploi.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PageEvent, MatPaginatorIntl } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.scss']
})
export class EmploiComponent extends MatPaginatorIntl implements OnInit {

  constructor(private emploiService: EmploiService, private router:Router, private route: ActivatedRoute) {
    super();
  }

  @ViewChild(NgForm) formFiltreEmploi: NgForm;

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
  reactifContrat  = this.emploiService.getTmpContrat();
  reactifRenumeration = this.emploiService.getTmpRenumeration();
  reactifExperience    = this.emploiService.getTmpExperience();

  pageEvent: PageEvent;
  length = 100;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  itemsPerPageLabel = 'Offres par page';
  nextPageLabel     = 'Page suivante';
  previousPageLabel = 'Page précédente';
 
  public getPaginationData(event?:PageEvent){
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    return event;
  }
  
  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
          this.emplois = emplois; 
          this.secteurs = Object.values(this.groupBy(this.emplois.filter(data => {
            return data.secteur !== undefined 
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
    //console.log(this.pageEvent.length)

    this.emploiService.getEmplois();
    //this.emploiService.getEmploisParPortion();
    
  }
  
  onClickAfficherPlus(idEmploi: number, titreEmploi: string){
    this.emploiService.setIdEmploi(idEmploi)
    this.router.navigate(['fiche/'+titreEmploi], {relativeTo: this.route});
  }

  onClickReset() {
    this.formFiltreEmploi.reset();
  }

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  

}
