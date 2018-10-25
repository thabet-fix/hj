import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(emplois: any, reactifMotCle: any, reactifSecteur: any, reactifPays: any, reactifContrat: any, reactifRenumeration: any, reactifExperience): any {
    if( reactifSecteur===undefined && reactifMotCle===undefined && reactifPays===undefined && reactifContrat===undefined && reactifRenumeration===undefined && reactifExperience===undefined){
      return emplois;
    }
    else{
      return emplois.filter(item =>{

          if((item.titre===undefined && reactifMotCle)||(reactifMotCle && item.titre.toLowerCase().indexOf(reactifMotCle.toLowerCase()) === -1))
          {
            return false;
          }
          
          else if((item.secteur===undefined && reactifSecteur)||(reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1))
          {
            return false;
          }

          else if((item.lieu===undefined && reactifPays)||(reactifPays && item.lieu.indexOf(reactifPays) === -1))
          {
            return false;
          }

          else if((item.type_contrat===undefined && reactifContrat)||(reactifContrat && item.type_contrat.indexOf(reactifContrat) === -1))
          {
            return false;
          }

          else if((item.renumeration===undefined && reactifRenumeration)||(reactifRenumeration && item.renumeration.indexOf(reactifRenumeration) === -1))
          {
            return false;
          }

          else if((item.experience===undefined && reactifExperience)||(reactifExperience && item.experience.indexOf(reactifExperience) === -1))
          {
            return false;
          }
          
          else return true;
        
    })
     
    }
  }

}
