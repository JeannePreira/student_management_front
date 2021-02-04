import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: false | any ;
  formLogin: any;
  authService: any;

  constructor(private authenticationService: AuthService) { }

  ngOnInit(): void {
    
    
  }

  onLogin(loginForm: NgForm): void {
     this.authenticationService.login(loginForm.value.email,loginForm.value.password).subscribe(data => {
              console.log(data) ;
     })
       
  }
}
