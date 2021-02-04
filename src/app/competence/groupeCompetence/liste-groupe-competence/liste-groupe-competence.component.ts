import { Component, OnInit } from '@angular/core';
import { GroupeCompetenceService } from '../groupe-competence.service';


@Component({
  selector: 'app-liste-groupe-competence',
  templateUrl: './liste-groupe-competence.component.html',
  styleUrls: ['./liste-groupe-competence.component.css']
})
export class ListeGroupeCompetenceComponent implements OnInit {

  groupeCompetences: any;

  totalRecords: number | any;;
  page: number=1;
  constructor(private _groupeCompetenceService:GroupeCompetenceService) { }

  ngOnInit(): void {
    this._groupeCompetenceService.getGroupeCompetence().subscribe(
      (data: any) =>
      {
        this.groupeCompetences = data; 
        this.totalRecords = this.groupeCompetences.length;
        console.log(data)
      }
    )

  }
  

}
