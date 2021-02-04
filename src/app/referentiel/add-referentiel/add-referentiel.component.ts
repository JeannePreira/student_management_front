import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ReferentielService } from '../service/referentiel.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

   referentielForm: FormGroup | any;
  constructor(private referentielService: ReferentielService) { }

  ngOnInit(): void {
    this.referentielForm = new FormGroup({
      'libelle': new FormControl(null),
      'presentation': new FormControl(null),
      'Competences': new FormControl(null),
      'programme': new FormControl(null),
      'critereEvaluation': new FormControl(null),
      'critereAdmission': new FormControl(null),
    })
  }

  ajouterReferentiel(){
    this.referentielService.addReferentiel(this.referentielForm.value).subscribe(data=>
      console.log(data)
    )
  }

}
