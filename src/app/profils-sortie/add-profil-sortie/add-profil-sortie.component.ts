import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.css']
})
export class AddProfilSortieComponent implements OnInit {

  constructor(private _profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
  }

  ajouterProfilSortie(profilSortieForm:NgForm){
    this._profilSortieService.addProfilSortie(profilSortieForm.value).subscribe(data=>
      {
        console.log(data)
        
      },(error: any) => {
        console.log(error)
      });  
  }

}
