import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  user: User | any;
  selectedFile: File  |any;
  idEdit = 0;

  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  constructor(private userService: UserService, private route: ActivatedRoute) {
    
  } 

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.userService.getUserById(+id).subscribe(
          (data)=>{
            this.user = data;
            // console.log(data.id);
          })
      });
  }

  modifierUser(userForm: NgForm){
    let formData = new FormData();
    formData.append("nom",userForm.value['nom']);
    formData.append("prenom",userForm.value['prenom']);
    formData.append("username",userForm.value['username']);
    formData.append("email",userForm.value['email']);
    formData.append("password",userForm.value['password']);
    formData.append("email",userForm.value['email']);
    formData.append("profil",userForm.value['profil']);
    formData.append("avatar",this.selectedFile);

     console.log(formData)
     
    this.userService.updateUser(formData, this.idEdit).subscribe(data => {
      console.log(data);
     },(error) => {
       console.log(error)
     });
  }
}

