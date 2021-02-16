import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProfilsService } from '../profils.service';


@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  
  @ViewChild('profilForm') form: NgForm | any;
   addProfil: FormGroup | any;
   profil:any;
  constructor(private _profilsService: ProfilsService) { }

  ngOnInit(): void {
   
  }
 
 
  ajouterProfil(){
    this._profilsService.addProfil(this.form.value).subscribe(data=>
      {
        this.profil = data;
        console.log(data)
        Swal.fire({
          icon: 'success',
          title: 'Ajouté!!',
          position: 'top-end'
        })
        this.form.reset();
       }
       ,(error) => {
         console.log(error)
         Swal.fire({
          icon: 'error',
          title: 'non Ajouté!',
          text: 'Cet profil existes déja',
          position: 'top-end'
        })
       });
       
  }
  
}