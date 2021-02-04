import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { GroupeCompetenceService } from '../groupeCompetence/groupe-competence.service';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  addForm: FormGroup | any;
  groupeCompetences: any;
  constructor(private competenceService: CompetenceService, private groupeCompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.groupeCompetenceService.getGroupeCompetence().subscribe( data => {
      this.groupeCompetences = data;
    });

    this.addForm = new FormGroup({
      'groupeCompetence': new FormControl(null),
      'libelle':new FormControl(null),
      'niveaux':new FormControl(null),
      // 'niveaux2':new FormControl(null),
      // 'niveaux':new FormControl(null),
    });
  }

  optionChoised(id: any) {
  }

  ajouterCompetence(){
    this.competenceService.addCompetence(this.addForm.value).subscribe(data=>
      {
        console.log(data)
      }  
    )
    // console.log(this.addForm.value)
  }
}
