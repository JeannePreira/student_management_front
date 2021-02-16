import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupeCompetenceService } from 'src/app/competence/groupeCompetence/groupe-competence.service';
import { ReferentielService } from '../service/referentiel.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  referentielForm: FormGroup | any;
  selectedFile: File  |any;
  groupeCompetences:any;
  onFileSelected(event: any) {
    if(event.target.files){
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
    }
  }
  constructor(private referentielService: ReferentielService, private groupeCompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.groupeCompetenceService.getGroupeCompetence().subscribe((data: any) => {
      this.groupeCompetences = data;
    });

    this.referentielForm = new FormGroup({
      'libelle': new FormControl('', Validators.required),
      'presentation': new FormControl('', Validators.required),
      'groupeCompetence': new FormControl('', Validators.required),
      'programme': new FormControl('', Validators.required),
      'critereEvaluation': new FormControl('', Validators.required),
      'critereAdmission': new FormControl('', Validators.required),
    })
  }
  optionChoised(id: any) {
  }
  
  ajouterReferentiel(){
    let formData = new FormData();
    formData.append("libelle",this.referentielForm.value['libelle']);
    formData.append("presentation",this.referentielForm.value['presentation']);
    formData.append("groupeCompetence",this.referentielForm.value['groupeCompetence']);
    formData.append("programme",this.referentielForm.value['programme']);
    formData.append("critereEvaluation",this.referentielForm.value['critereEvaluation']);
    formData.append("critereAdmission",this.referentielForm.value['critereAdmission']);

    this.referentielService.addReferentiel(this.referentielForm.value).subscribe(data=>
      console.log(data)
    )
  }


  get libelle(){
    return this.referentielForm.get('libelle')
  }

  get presentation(){
    return this.referentielForm.get('presentation')
  }

  get groupeCompetence(){
    return this.referentielForm.get('groupeCompetence')
  }

  get programme(){
    return this.referentielForm.get('programme')
  }

  get critereEvaluation(){
    return this.referentielForm.get('critereEvaluation')
  }

  get critereAdmission(){
    return this.referentielForm.get('critereAdmission')
  }

}
