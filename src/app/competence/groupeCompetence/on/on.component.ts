import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { GroupeCompetenceService } from '../groupe-competence.service';

@Component({
  selector: 'app-on',
  templateUrl: './on.component.html',
  styleUrls: ['./on.component.css']
})
export class OnComponent implements OnInit {

  @Input() propFils: any;
  // @Input() propFil: any;
  groupeCompetences: any;
  libelle ='';
  constructor(private groupeCompetenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
  }

  supprimergroupeCompetence(id: number){
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
        this.groupeCompetenceService.deleteCompetence(id).subscribe( data => {
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
