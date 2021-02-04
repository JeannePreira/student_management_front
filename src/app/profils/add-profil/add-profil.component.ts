import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Profil } from '../profil/profil.module';
import { ProfilsService } from '../profils.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

 addProfil: FormGroup | any;
  constructor(private _profilsService: ProfilsService) { }

  ngOnInit(): void {
   
  }
 
 
  ajouterProfil(profilForm:NgForm){
    this._profilsService.addProfil(profilForm.value).subscribe(data=>
      {
        console.log(data)
        
      },(error: any) => {
        console.log(error)
      });  
  }
  
}