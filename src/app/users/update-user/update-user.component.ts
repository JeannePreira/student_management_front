import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @ViewChild('userForm') form: NgForm | any;
  user: User | any;
  selectedFile: File  |any;
  selected: File | any;
  idEdit = 0;
  test = false;
  url="./assets/images/Avatar.png";

  onFileSelected(event: any) {
    if(event.target.files){
      var reade = new FileReader();
      this.selectedFile =  event.target.files[0];
      this.selected =  event.target.files[0];
      this.selectedFile = reade.readAsDataURL(event.target.files[0]);
      reade.onload = (event:any)=>{
        this.url=event.target.result;
      }
    console.log(this.selectedFile)
    }
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

  choixprofil (event:any){
    if(event.target.value=="APPRENANT"){ 
      this.test = true;
      }else{
        this.test = false;
      }
  }

     modifierUser(){
    // console.log(this.form.value)
    let formData = new FormData();
    formData.append("nom",this.form.value['nom']);
    formData.append("prenom",this.form.value['prenom']);
    formData.append("username",this.form.value['username']);
    formData.append("email",this.form.value['email']);
    formData.append("password",this.form.value['password']);
    formData.append("email",this.form.value['email']);
    formData.append("profil",this.form.value['profil']);
    // if(this.selectedFile){
    formData.append("avatar",this.selected);
    // }

     console.log(formData)
     if(this.form.value['password'] === this.form.value['confirmpassword']){
       this.userService.updateUser(formData, this.idEdit).subscribe(res => {
          console.log(res)
          Swal.fire({
           icon: 'success',
           title: 'modifié!',
           position: 'top'
         })
         this.form.reset();
         this.selectedFile.reset();
        },(error) => {
          console.log(error)
          Swal.fire({
           icon: 'error',
           title: 'non modifié!',
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

