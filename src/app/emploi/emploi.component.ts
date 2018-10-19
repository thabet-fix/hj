import { Component, OnInit } from '@angular/core';
import { EmploiService } from './emploi.service';
import { Emploi } from './emploi.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})
export class EmploiComponent implements OnInit {

  constructor(private emploiService: EmploiService) { }

  tmpMotCle: String;
  tmpSecteur: String;
  tmpPays: String;
  emplois: Emploi[];
  emploiSubscription: Subscription;

  ngOnInit() {
    this.emploiSubscription = this.emploiService.emploisChanged
      .subscribe(emplois => {
         this.emplois = emplois; 
         console.log(this.emplois);
        });
    this.tmpMotCle = this.emploiService.getTmpMotCle();
    this.tmpSecteur = this.emploiService.getTmpSecteur();
    this.tmpPays = this.emploiService.getTmpPays();
    this.emploiService.getEmploisParCritere(this.tmpMotCle,this.tmpSecteur,this.tmpPays);
  }

}
