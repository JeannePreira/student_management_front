
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Profil } from '../profil/profil.module';
import { ProfilsService } from '../profils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.css']
})
export class ListeProfilsComponent implements OnInit {
  
  profils : any;
  refreshProfils = new BehaviorSubject<boolean>(true);

  
  totalRecords: number | any;;
  page: number=1;
  libelle="";
  constructor( private _profilsService: ProfilsService) { }

  ngOnInit(): void {
    this._profilsService.getRefresh().subscribe(()=>{
      this.getProfils()
    })
    this.getProfils();
  }
  
  getProfils(){
        this.profils=this._profilsService.getProfils().subscribe(
          data =>  { 
            this.profils = data;
            this.totalRecords = this.profils.length;
          })
  }
  
  search(){
    if (this.libelle == "") {
      this.ngOnInit();
    }else{
      this.profils = this.profils.filter((res: { libelle: string; })=>{
        return res.libelle.toLocaleLowerCase().match(
          this.libelle.toLocaleLowerCase()
        );
      })
    }
  }

  deleteProfil(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._profilsService.deleteProfil(id).subscribe( data => {
          console.log(data)
          // console.log(data)
        })
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}