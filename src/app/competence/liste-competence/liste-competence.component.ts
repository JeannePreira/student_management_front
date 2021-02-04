import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.css']
})
export class ListeCompetenceComponent implements OnInit {

  competences: any;
  constructor(private _competenceService: CompetenceService) { }


  ngOnInit(): void {
    this._competenceService.getCompetence().subscribe(
      (data: any) =>
      {
        this._competenceService = data; 
        console.log(data)
      }
    )
  }

  onOptionsSelected(id: any) {
  }
}
