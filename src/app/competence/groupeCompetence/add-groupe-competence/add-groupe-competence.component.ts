import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompetenceService } from '../../service/competence.service';
import { GroupeCompetenceService } from '../groupe-competence.service';
import Swal from 'sweetalert2';

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
      'libelle': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'competence': new FormControl('', Validators.required)
    })


  }
 
  onOptionsSelected(id: any) {
  }
  
  ajouterGroupeCompetence(){
    this.groupeCompetenceService.addGroupeCompetence(this.addgroupForm.value).subscribe(data =>
      {
        console.log(data)
        Swal.fire({
          icon: 'success',
          title: 'Ajouté!!',
          position: 'top-end'
        })
        this.addgroupForm.reset();
       }
       ,(error) => {
         console.log(error)
         Swal.fire({
          icon: 'error',
          title: 'non Ajouté!',
          text: 'infos invalid ou existes déja',
          position: 'top-end'
        })
       });

  }

  get libelle(){
    return this.addgroupForm.get('libelle')
  }

  get description(){
    return this.addgroupForm.get('description')
  }

  get competence(){
    return this.addgroupForm.get('competence')
  }
}
