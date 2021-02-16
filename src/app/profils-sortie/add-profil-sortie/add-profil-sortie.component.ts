import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilSortieService } from '../profil-sortie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.css']
})
export class AddProfilSortieComponent implements OnInit {

  @ViewChild('profilSortieForm') form: NgForm | any;
  profilSortie:any;
  constructor(private _profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
  }

  ajouterProfilSortie(){
    this._profilSortieService.addProfilSortie(this.form.value).subscribe(data=>
      {
        
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
          position: 'top-end',
          icon: 'error',
          title: 'Travail non sauvegardé!',
          text: 'Cet profil de Sortie existes déja',
          // showConfirmButton: false,
          // timer: 1500
        })
       });
  }

}
