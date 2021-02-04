import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-liste-profil-sortie',
  templateUrl: './liste-profil-sortie.component.html',
  styleUrls: ['./liste-profil-sortie.component.css']
})
export class ListeProfilSortieComponent implements OnInit {

  profilsSortie: any;

  totalRecords: number | any;;
  page: number=1;
  
  constructor(private _profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
    this._profilSortieService.getProfilSortie().subscribe( data=>
      {
        // console.log(data)
        this.profilsSortie = data;
        this.totalRecords = this.profilsSortie.length;
      }
    )
  }

}
