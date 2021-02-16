import { Component, OnInit } from '@angular/core';
import { ProfilSortieService } from '../profil-sortie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-profil-sortie',
  templateUrl: './liste-profil-sortie.component.html',
  styleUrls: ['./liste-profil-sortie.component.css']
})
export class ListeProfilSortieComponent implements OnInit {

  profilsSortie: any;

  totalRecords: number | any;;
  page: number=1;
  libelle = ''
  constructor(private _profilSortieService: ProfilSortieService) { }

  ngOnInit(): void {
    this._profilSortieService.getRefresh().subscribe(()=>{
      this.getProfilSortie()
    })
    this.getProfilSortie();
  }
  
  getProfilSortie(){
    this._profilSortieService.getProfilSortie().subscribe( data=>
      {
        this.profilsSortie = data;
        this.totalRecords = this.profilsSortie.length;
      }
    )
  }

  search(){
    if (this.libelle == "") {
      this.ngOnInit();
    }else{
      this.profilsSortie = this.profilsSortie.filter((res: { libelle: string; })=>{
        return res.libelle.toLocaleLowerCase().match(
          this.libelle.toLocaleLowerCase()
        );
      })
    }
  }

  supprimerProfilSortie(id:number){
    console.log(id)
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
        this._profilSortieService.deleteProfilSortie(id).subscribe( data => {
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
