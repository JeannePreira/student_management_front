import { Component, OnInit } from '@angular/core';
import { GroupeCompetenceService } from '../groupe-competence.service';


@Component({
  selector: 'app-liste-groupe-competence',
  templateUrl: './liste-groupe-competence.component.html',
  styleUrls: ['./liste-groupe-competence.component.css']
})
export class ListeGroupeCompetenceComponent implements OnInit {
  [x: string]: any;

  groupeCompetences: any;

  totalRecords: number | any;;
  page: number=1;
  libelle ='';
  constructor(private _groupeCompetenceService:GroupeCompetenceService) { }

  ngOnInit(): void {
    this._groupeCompetenceService.getRefresh().subscribe(() =>{
      this.getGroupeCompetence();
    });
    this.getGroupeCompetence();

   

  }
  getGroupeCompetence(){
    this._groupeCompetenceService.getGroupeCompetence().subscribe(
      (data: any) =>
      {
        this.groupeCompetences = data; 
        this.totalRecords = this.groupeCompetences.length;
        console.log(data)
      }
    )
  }
  
  search(){
    if (this.libelle == "") {
      this.ngOnInit();
    }else{
      this.groupeCompetences = this.groupeCompetences.filter((res: { libelle: string; })=>{
        return res.libelle.toLocaleLowerCase().match(
          this.libelle.toLocaleLowerCase()
        );
      })
    }
  }

}
