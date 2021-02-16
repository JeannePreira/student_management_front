import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CompetenceService } from '../../service/competence.service';
import { GroupeCompetenceService } from '../groupe-competence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-grp-competence',
  templateUrl: './update-grp-competence.component.html',
  styleUrls: ['./update-grp-competence.component.css']
})
export class UpdateGrpCompetenceComponent implements OnInit {

  updategroupForm: FormGroup | any;
  idEdit=0;
  competences: any;
  groupeCompetences: any;
  constructor(private groupeCompetenceService: GroupeCompetenceService, private competenceService: CompetenceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.competenceService.getCompetence().subscribe( data => {
      this.competences = data;
    });

    this.updategroupForm = new FormGroup({
      'libelle': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'competence': new FormControl('', Validators.required)
    })

    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.groupeCompetenceService.getGroupeCompetenceById(+id).subscribe(
          (data)=>{
            this.groupeCompetences = data;
            console.log(data);
          })
      });

  }
 
  onOptionsSelected(id: any) {
  }
  
  modifierGroupeCompetence(){
    this.groupeCompetenceService.updateGroupeCompetence(this.updategroupForm.value, this.idEdit).subscribe(data =>
      {
        console.log(data)

        Swal.fire({
          icon: 'success',
          title: 'Ajouté!!',
          position: 'top-end'
        })
        this.updategroupForm.reset();
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
  return this.updategroupForm.get('libelle')
}

get description(){
  return this.updategroupForm.get('description')
}

get competence(){
  return this.updategroupForm.get('competence')
}
}
