import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProfilsService } from '../profils.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  idEdit=0;
  user: any;
  refreshProfils = new BehaviorSubject<boolean>(true);
  constructor(private profilService: ProfilsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.profilService.getProfilById(+id).subscribe(
          (data)=>{
            this.user = data;
            // console.log(data.id);
          })
      });
  }

  editerProfil(profilForm:NgForm){
    this.profilService.updateProfil(profilForm.value,this.idEdit).subscribe(data=>{
      console.log(data)
    })
    // this.refreshProfils.next(true);
  }
}
