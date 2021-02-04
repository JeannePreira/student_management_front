import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-update-profil-sortie',
  templateUrl: './update-profil-sortie.component.html',
  styleUrls: ['./update-profil-sortie.component.css']
})
export class UpdateProfilSortieComponent implements OnInit {
  
  idEdit=0;
  user: any;
  constructor(private profilSortieService:ProfilSortieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.profilSortieService.getPsById(+id).subscribe(
          (data)=>{
            this.user = data;
            // console.log(data.id);
          })
      });
  }
  
  modifierPs(editForm: NgForm){
    this.profilSortieService.updateProfilSortie(editForm.value, this.idEdit).subscribe(data=>
      {
        console.log(data);
      }  
    )
    // console.log(editForm.value)
  }
}
