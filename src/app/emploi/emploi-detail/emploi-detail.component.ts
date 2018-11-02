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
  emploiSubscription: Subscription;
  
  ngOnInit() {
    this.item = this.emploiService.getEmploi();
    this.item.subscribe((datas) => { console.log("datas", datas) },(err)=>{ console.log("probleme : ", err) });
  }

}
