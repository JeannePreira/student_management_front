import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('userForm') form: NgForm | any;
  user: User | any;
  selectedFile: File  |any;
  selected: File  |any;
  url="./assets/images/Avatar.png";
  test = false;
  onFileSelected(event: any) {
    if(event.target.files){
      var reade = new FileReader();
      this.selectedFile =  event.target.files[0];
      this.selected =  event.target.files[0];
      this.selectedFile = event.target.files[0];
      reade.onload = (event:any)=>{
        this.url=event.target.result;
      }
    console.log(this.selectedFile)
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  choixprofil (event:any){
    if(event.target.value=="APPRENANT"){ 
      this.test = true;
      }else{
        this.test = false;
      }
  }

  ajouterUser(){
    console.log(this.selectedFile)
    let formData = new FormData();
    formData.append("nom",this.form.value['nom']);
    formData.append("prenom",this.form.value['prenom']);
    formData.append("username",this.form.value['username']);
    formData.append("email",this.form.value['email']);
    formData.append("password",this.form.value['password']);
    formData.append("email",this.form.value['email']);
    formData.append("adresse",this.form.value['adresse']);
    formData.append("telephone",this.form.value['telephone']);
    formData.append("profil",this.form.value['profil']);
    if(this.selectedFile){
      formData.append("avatar",this.selectedFile);
    }

     console.log(formData)
     if(this.form.value['password'] === this.form.value['confirmpassword']){
       this.userService.addUser(formData).subscribe(res => {
          console.log(res)
          Swal.fire({
           icon: 'success',
           title: 'Ajouté!',
           position: 'top'
         })
         this.form.reset();
        },(error) => {
          console.log(error)
          Swal.fire({
           icon: 'error',
           title: 'non Ajouté!',
           text: 'Vérifiez les informations saisies!',
           position: 'top'
         })
        });
     }else{
      Swal.fire({
        icon: 'error',
        title: 'non Ajouté!',
        text: 'password non identique!',
        position: 'top'
      })
     }

  }
}
