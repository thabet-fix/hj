import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploiService } from './emploi.service';
import { Emploi } from './emploi.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { PageEvent, MatPaginatorIntl, MatChipInputEvent, MatIconModule } from '@angular/material';
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

  /******** Pagination */
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

  /******* Chips Filter */
  visible = true;
  selectable = true;
  removable = true;
  chipsFilter = [];
   
  remove(item){
    this.chipsFilter.splice(item, 1);
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
    this.emploiService.getEmplois();

    this.emploiService.tmpSecteurObs.subscribe(tmpSecteur => {
      this.reactifSecteur = tmpSecteur;
    });
    /*this.emploiService.tmpSecteurObs.subscribe(tmpSecteur => {
      this.reactifSecteur = tmpSecteur;
    });
    this.emploiService.tmpSecteurObs.subscribe(tmpSecteur => {
      this.reactifSecteur = tmpSecteur;
    });*/
    
  }

  addChipsFilter(critere:any, type: string){
    if (critere!==undefined){
      this.chipsFilter.map(function(item, index, array){
        console.log(item.type+">>"+type)
        if(item.type.indexOf(type) === 0){
          array.splice(index, 1);
          //this.remove(index)
        }
      })
      this.chipsFilter.push({"critere" : critere, "type" : type})
    }
    
  }

  onChangeSelecteur(form: NgForm){
    this.emploiService.setTmpMotCle(form.value.tmpMotCleInput?form.value.tmpMotCleInput:undefined);
    
    this.emploiService.setTmpSecteur(form.value.tmpSecteurInput?form.value.tmpSecteurInput:undefined);
    this.addChipsFilter(this.reactifSecteur, "reactifSecteur");
    this.emploiService.setTmpPays(form.value.tmpPaysInput?form.value.tmpPaysInput:undefined);
    this.addChipsFilter(this.reactifPays, "reactifPays");
    this.emploiService.setTmpContrat(form.value.tmpTypeEmploiInput?form.value.tmpTypeEmploiInput:undefined);
    this.addChipsFilter(this.reactifContrat, "reactifContrat");
    this.emploiService.setTmpRenumeration(form.value.tmpRenumerationInput?form.value.tmpRenumerationInput:undefined);
    this.emploiService.setTmpExperience(form.value.tmpExperienceInput?form.value.tmpExperienceInput:undefined);
  }
  onChangeSelect(form: NgForm, type:string){
     switch(type){
      case 'reactifSecteur': { 
          this.emploiService.setTmpSecteur(form.value.tmpSecteurInput?form.value.tmpSecteurInput:undefined);
          this.addChipsFilter(this.reactifSecteur, "reactifSecteur");
          break; 
      } 
      case 'reactifPays': { 
          this.emploiService.setTmpPays(form.value.tmpPaysInput?form.value.tmpPaysInput:undefined);
          this.addChipsFilter(this.reactifPays, "reactifPays");
          break; 
      } 
      case 'reactifContrat': { 
          this.emploiService.setTmpContrat(form.value.tmpTypeEmploiInput?form.value.tmpTypeEmploiInput:undefined);
          this.addChipsFilter(this.reactifContrat, "reactifContrat");
          break; 
      } 
      default: { 
          //statements; 
          break; 
      } 
     }
  }
  
  onClickAfficherPlus(idEmploi: number, titreEmploi: string){
    this.emploiService.setIdEmploi(idEmploi)
    this.router.navigate(['fiche/'+titreEmploi], {relativeTo: this.route});
  }

  onClickReset() {
    this.formFiltreEmploi.reset();
  }

  onClickRemove(){
    console.log("essai")
    this.visible = false;
  }

  groupBy (xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  

}
