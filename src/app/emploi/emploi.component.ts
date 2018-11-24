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
   
  remove(form: NgForm, item, type){
    this.chipsFilter.splice(item, 1);
    console.log(type)
    switch(type){
        case 'reactifSecteur': { 
            this.emploiService.setTmpSecteur(undefined);
            this.reactifSecteur = undefined;
            break; 
        } 
        case 'reactifPays': { 
            this.emploiService.setTmpPays(undefined);
            this.reactifPays = undefined
            break; 
        } 
        case 'reactifContrat': { 
            this.emploiService.setTmpContrat(undefined);
            this.reactifContrat = undefined
            break; 
        } 
        case 'reactifRenumeration': { 
          this.emploiService.setTmpContrat(undefined);
          this.reactifRenumeration = undefined
          break; 
        } 
        case 'reactifExperience': { 
          this.emploiService.setTmpContrat(undefined);
          this.reactifExperience = undefined
          break; 
        } 
        default: {
            break; 
        } 
    }
  }

  
  
  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
          this.emplois = emplois; 
          console.log(emplois)
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
          this.initChipsFilter();
        });
    this.emploiService.getEmplois();
    
  }

  initChipsFilter(){
    this.addChipsFilter(this.reactifSecteur, "reactifSecteur");
    this.addChipsFilter(this.reactifPays, "reactifPays");
    this.addChipsFilter(this.reactifContrat, "reactifContrat");
    this.addChipsFilter(this.reactifRenumeration, "reactifRenumeration");
    this.addChipsFilter(this.reactifExperience, "reactifExperience");
  }

  addChipsFilter(critere:any, type: string){
    
      this.chipsFilter.map(function(item, index, array){
        console.log(item.type+">>"+type)
        if(item.type.indexOf(type) === 0){
          array.splice(index, 1);
        }
      })
      if(critere!==undefined)
      this.chipsFilter.push({"critere" : critere, "type" : type})    
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
      case 'reactifRenumeration': { 
        this.emploiService.setTmpContrat(form.value.tmpRenumerationInput?form.value.tmpRenumerationInput:undefined);
        this.addChipsFilter(this.reactifRenumeration, "reactifRenumeration");
        break; 
      } 
      case 'reactifExperience': { 
        this.emploiService.setTmpContrat(form.value.tmpExperienceInput?form.value.tmpExperienceInput:undefined);
        this.addChipsFilter(this.reactifExperience, "reactifExperience");
        break; 
      } 
      default: {
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
    this.chipsFilter=[];
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
