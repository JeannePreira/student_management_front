import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfilSortieService } from '../profil-sortie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil-sortie',
  templateUrl: './update-profil-sortie.component.html',
  styleUrls: ['./update-profil-sortie.component.css']
})
export class UpdateProfilSortieComponent implements OnInit {
  
  idEdit=0;
  user: any;
  @ViewChild('editForm') form: NgForm | any;
  profilSortie: any;
  constructor(private profilSortieService:ProfilSortieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.profilSortieService.getPsById(+id).subscribe(
          (data)=>{
            this.profilSortie = data;
            // console.log(data.id);
          })
      });
  }
  
  modifierProfilsortie(){
    this.profilSortieService.updateProfilSortie(this.form.value, this.idEdit).subscribe(data=>
      {
        Swal.fire({
          icon: 'success',
          title: 'Modifié!!',
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
          text: 'Vérifiez vos données',
          // showConfirmButton: false,
          // timer: 1500
        })
       });
  }
}
