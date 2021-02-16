import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';
import { Referentiel } from '../model/referentiel';
import { ReferentielService } from '../service/referentiel.service';

@Component({
  selector: 'app-liste-referentiel',
  templateUrl: './liste-referentiel.component.html',
  styleUrls: ['./liste-referentiel.component.css']
})
export class ListeReferentielComponent implements OnInit {

  referentiels: any;
  totalRecords: number | any;;
  page: number=1;
  
  constructor(private referentielService: ReferentielService) { }

  ngOnInit(): void {
    this.referentielService.getReferentiel().subscribe(data =>
      {
        this.referentiels = data
        this.totalRecords = this.referentiels.length;
        console.log(data)
      }  
    )

    
  }

}
