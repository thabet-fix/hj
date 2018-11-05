import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmploiService } from '../emploi.service';
import { Emploi } from '../emploi.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-emploi-detail',
  templateUrl: './emploi-detail.component.html',
  styleUrls: ['./emploi-detail.component.css']
})
export class EmploiDetailComponent implements OnInit {

  constructor( private router:Router, private route: ActivatedRoute, private emploiService: EmploiService) { }
  item: Observable<Emploi>;
  emploi: Emploi[];
  lieu: string;
  secteur: string;
  emploiSubscription: Subscription;
  
  ngOnInit() {
    this.item = this.emploiService.getEmploi();
    this.item.subscribe((datas) => { 
      console.log("datas", datas) 
      this.lieu = datas.lieu;
      this.secteur = datas.secteur;
      },
      (err)=>{ console.log("probleme : ", err) }
    );
  }
  
  onClickLieu(){
    this.emploiService.setTmpPays(this.lieu);
    this.router.navigate(['./emploi']);
  }

  onClickSecteur(){
    this.emploiService.setTmpSecteur(this.secteur);
    this.router.navigate(['./emploi']);
  }
  
  onClickEmploi(){
    this.router.navigate(['./emploi']);
  }

}
