import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { CompetenceService } from '../../service/competence.service';
import { GroupeCompetenceService } from '../groupe-competence.service';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {

  addgroupForm: FormGroup | any;
  competences: any;
  groupeCompetences: any;
  constructor(private groupeCompetenceService: GroupeCompetenceService, private competenceService: CompetenceService) { }

  ngOnInit(): void {
    this.competenceService.getCompetence().subscribe( data => {
      this.competences = data;
    });

    this.addgroupForm = new FormGroup({
      'libelle': new FormControl(null),
      'description': new FormControl(null),
      'competence': new FormControl(null)
    })


  }
 
  onOptionsSelected(id: any) {
  }
  
  ajouterGroupeCompetence(){
    this.groupeCompetenceService.addGroupeCompetence(this.addgroupForm.value).subscribe(data =>
      {
        console.log(data)
      }  
    )
    // console.log(this.addgroupForm.value.description)
  }
}
