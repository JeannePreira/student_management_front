
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Profil } from '../profil/profil.module';
import { ProfilsService } from '../profils.service';

@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.css']
})
export class ListeProfilsComponent implements OnInit {
  
  profils : any;
  refreshProfils = new BehaviorSubject<boolean>(true);

  
  totalRecords: number | any;;
  page: number=1;
  
  constructor( private _profilsService: ProfilsService) { }

  ngOnInit(): void {
  //  this.refreshProfils.pipe(switchMap(async (_) => 

    this.profils=this._profilsService.getProfils().subscribe(
      data =>  { 
        this.profils = data;
        this.totalRecords = this.profils.length;
      })

    // ));
  }
}