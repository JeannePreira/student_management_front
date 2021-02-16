import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupeCompetenceService } from '../groupeCompetence/groupe-competence.service';
import { CompetenceService } from '../service/competence.service';import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-competence',
  templateUrl: './update-competence.component.html',
  styleUrls: ['./update-competence.component.css']
})
export class UpdateCompetenceComponent implements OnInit {
  idEdit=0;
  updateForm: FormGroup | any;
  groupeCompetences: any;
  competences: any;
  constructor(private competenceService: CompetenceService, private groupeCompetenceService: GroupeCompetenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupeCompetenceService.getGroupeCompetence().subscribe( data => {
      this.groupeCompetences = data;
    });

    this.updateForm = new FormGroup({
      'groupeCompetence': new FormControl('', Validators.required),
      'libelle':new FormControl('', Validators.required),
      'description':new FormControl('', Validators.required),
      'libellen1':new FormControl('', Validators.required),
      'libellen2':new FormControl('', Validators.required),
      'libellen3':new FormControl('', Validators.required),
      'groupeAction1': new FormControl(null),
      'groupeAction2': new FormControl(null),
      'groupeAction3': new FormControl(null),
      'critereEvaluation1': new FormControl(null),
      'critereEvaluation2': new FormControl(null),
      'critereEvaluation3': new FormControl(null)
    });

    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.competenceService.getCompetenceById(+id).subscribe(
          (data)=>{
            this.competences = data;
            // console.log(data.id);
          })
      });
  }

  optionChoised(id: any) {
  }

  modifierCompetence(){

    const form = this.updateForm.value;
    let competence:any = {};
    competence.libelle = form.libelle;
    competence.description = form.description;
    competence.niveaux = [];
    for(let i=1; i <= 3 ;i++){
      competence.niveaux.push({libelle:form['libellen'+i],
                              groupeAction:form['groupeAction'+i], 
                              critereEvaluation:form['critereEvaluation'+i]})
    }
    // console.log(competence);
    this.competenceService.updateCompetence(competence, this.idEdit).subscribe(data=>
      {
        console.log(data)
     
        Swal.fire({
          icon: 'success',
          title: 'Modifié!!',
          position: 'top-end'
        })
        this.updateForm.reset();
       }
       ,(error) => {
         console.log(error)
         Swal.fire({
          icon: 'error',
          title: 'non Modifié!',
          text: 'infos invalid ou existes déja',
          position: 'top-end'
        })
       });
    // console.log(this.updateForm.value)
  }

  get groupeCompetence(){
    return this.updateForm.get('groupeCompetence')
  }

  get libelle(){
    return this.updateForm.get('libelle')
  }

  get description(){
    return this.updateForm.get('description')
  }

  get libellen1(){
    return this.updateForm.get('libellen1')
  }

  get libellen2(){
    return this.updateForm.get('libellen2')
  }

  get libellen3(){
    return this.updateForm.get('libellen3')
  }

}
