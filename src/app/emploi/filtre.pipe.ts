import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(emplois: any, reactifMotCle: any, reactifSecteur: any): any {
    if( reactifSecteur===undefined && reactifMotCle===undefined){
      /*return emplois.filter(function(x){
          return x.secteur.includes(reactifSecteur);
      })*/
      return emplois;
    }
    else{
      // return emplois.filter(function(x){
      //     return x.titre.toLowerCase().includes(reactifMotCle.toLowerCase());
      // })
      return emplois.filter(item =>{
        if ((reactifMotCle && item.titre.toLowerCase().indexOf(reactifMotCle.toLowerCase()) === -1)||(reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1)){
          console.log("mot cle : "+(reactifMotCle && item.titre.toLowerCase().indexOf(reactifMotCle.toLowerCase()) === -1));  
          console.log("secteur : "+(reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1));
          return false;
        }
        /*if (reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1){
            return false;
        }*/
        return true;
    })
     
    }
  }

}
