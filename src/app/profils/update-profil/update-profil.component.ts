import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfilsService } from '../profils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  idEdit=0;
  profil: any;
  refreshProfils = new BehaviorSubject<boolean>(true);
  @ViewChild('profilForm') form: NgForm | any;
  constructor(private profilService: ProfilsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.profilService.getProfilById(+id).subscribe(
          (data)=>{
            this.profil = data;
            // console.log(data.id);
          })
      });
  }

  editerProfil(){
    this.profilService.updateProfil(this.form.value,this.idEdit).subscribe(data=>{
      console.log(data)
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
