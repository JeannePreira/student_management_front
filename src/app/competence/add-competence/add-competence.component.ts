import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupeCompetenceService } from '../groupeCompetence/groupe-competence.service';
import { CompetenceService } from '../service/competence.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {

  idEdit=0;
  addForm: FormGroup | any;
  groupeCompetences: any;
  competences: any;
  constructor(private competenceService: CompetenceService, private groupeCompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.groupeCompetenceService.getGroupeCompetence().subscribe( data => {
      this.groupeCompetences = data;
    });

    this.addForm = new FormGroup({
      'groupeCompetence': new FormControl([], Validators.required),
      'libelle':new FormControl('', Validators.required),
      'description':new FormControl('', Validators.required),
      'libellen1':new FormControl('', Validators.required),
      'libellen2':new FormControl('', Validators.required),
      'libellen3':new FormControl('', Validators.required),
      'groupeAction1': new FormControl('', Validators.required),
      'groupeAction2': new FormControl('', Validators.required),
      'groupeAction3': new FormControl('', Validators.required),
      'critereEvaluation1': new FormControl('', Validators.required),
      'critereEvaluation2': new FormControl('', Validators.required),
      'critereEvaluation3': new FormControl('', Validators.required)
    });

  
  }

  optionChoised(id: any) {
  }

  ajouterCompetence(){

    const form = this.addForm.value;
    console.log(form);
    
    let competence:any = {};
    competence.libelle = form.libelle;
    competence.groupeCompetence = form.groupeCompetence;
    competence.description = form.description;
    competence.niveaux = [];
    for(let i=1; i <= 3 ;i++){
      competence.niveaux.push({libelle:form['libellen'+i],
                              groupeAction:form['groupeAction'+i], 
                              critereEvaluation:form['critereEvaluation'+i]})
    }
    console.log(competence);
    this.competenceService.addCompetence(competence).subscribe(data =>
      {
        console.log(data)

     
        Swal.fire({
          icon: 'success',
          title: 'Modifié!!',
          position: 'top-end'
        })
        this.addForm.reset();
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
    // console.log(this.addForm.value)
  }

  get groupeCompetence(){
    return this.addForm.get('groupeCompetence')
  }

  get libelle(){
    return this.addForm.get('libelle')
  }

  get description(){
    return this.addForm.get('description')
  }

  get libellen1(){
    return this.addForm.get('libellen1')
  }

  get libellen2(){
    return this.addForm.get('libellen2')
  }

  get libellen3(){
    return this.addForm.get('libellen3')
  }

}
