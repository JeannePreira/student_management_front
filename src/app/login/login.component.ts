import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authService: any;
  @ViewChild('loginForm') form: NgForm | any;

  constructor(private authenticationService: AuthService) { }


  ngOnInit(): void {
    
     
  }

  onLogin(): void {
     this.authenticationService.login(this.form.value.email,this.form.value.password).subscribe(data => {
              console.log(data) ;
              Swal.fire({
                icon: 'success',
                title: 'Bienvenue',
                text: 'dans mon site !',
                position: 'top'
              })
     })
      
      Swal.fire({
        icon: 'error',
        title: 'Oups...',
        text: 'Certaines données sont invalides !',
        position: 'top'
      })
  }
}
