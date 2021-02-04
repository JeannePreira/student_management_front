import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User | any;
  selectedFile: File  |any;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  ajouterUser(userForm: NgForm){
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
    this.userService.addUser(formData).subscribe(res => {
       console.log(res)
     },(error) => {
       console.log(error)
     });
  }
}
