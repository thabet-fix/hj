import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(emplois: any, reactifMotCle: any, reactifSecteur: any, reactifPays: any): any {
    if( reactifSecteur===undefined && reactifMotCle===undefined && reactifPays===undefined){
      return emplois;
    }
    else{
      return emplois.filter(item =>{
        
          if(reactifMotCle && item.titre.toLowerCase().indexOf(reactifMotCle.toLowerCase()) === -1)
          {
            //console.log("reactifPays false : "+item.lieu+" pour selection : "+reactifPays+" indexOf : ")
            return false;
          }
          //console.log("reactifPays true : "+item.lieu+" pour selection : "+reactifPays+" indexOf : ")

          else if(reactifSecteur && item.secteur.indexOf(reactifSecteur) === -1)
          {
            //console.log("reactifPays false : "+item.lieu+" pour selection : "+reactifPays+" indexOf : ")
            return false;
          }
          //console.log("reactifPays true : "+item.lieu+" pour selection : "+reactifPays+" indexOf : ")

          else if((reactifPays && item.lieu.indexOf(reactifPays) === -1)|| item.lieu===undefined){
            return false;
          }
          
          else return true;
          
          
          
        
        
    })
     
    }
  }

}
