import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(emplois: any, reactifMotCle: any): any {
    if(reactifMotCle===undefined){
      return emplois;
    }
    else{
      return emplois.filter(function(x){
          return x.titre.toLowerCase().includes(reactifMotCle.toLowerCase());
      })
    }
  }

}
