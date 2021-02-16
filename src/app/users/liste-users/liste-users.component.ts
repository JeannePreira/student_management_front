import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RechercheService } from 'src/app/recherche.service';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  users: any;
  totalRecords: number | any;;
  page: number=1;
  prenom = ""
  constructor(private _userService: UserService, private rechercheService:RechercheService, private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this._userService.getRefresh().subscribe(() =>{
      this.getUsers();
    });
    this.getUsers();
  }
  
  getUsers() {
    this._userService.getUsers().subscribe( data => {
      this.users = data;
      this.totalRecords = this.users.length;
      // console.log(data)
    })
  }

  search(){
    if (this.prenom == "") {
      this.ngOnInit();
    }else{
      this.users = this.users.filter((res: { prenom: string; })=>{
        return res.prenom.toLocaleLowerCase().match(
          this.prenom.toLocaleLowerCase()
        );
      })
    }
  }

  deleteUser(id:number){
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
        this._userService.deleteUser(id).subscribe( data => {
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
    // console.log(id);
  }
}


