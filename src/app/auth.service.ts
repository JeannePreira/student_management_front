import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 baseUrl = "/api" ;
  helper = new JwtHelperService() ;
  constructor(private http: HttpClient, private router: Router) { }

 login(email:string, password:string){
    return this.http.post(this.baseUrl+'/login', {
     email,  password
     }).pipe(
            map((response: any) =>{
              localStorage.setItem('token',response.token) ;
                const tokendecoded =  this.helper.decodeToken(response.token) ;
                console.log(tokendecoded)

                if(tokendecoded.roles.includes("ROLE_ADMIN")){
                      this.router.navigate(['admin']);
                      return response;

                }else if(tokendecoded.roles.includes("ROLE_APPRENANT")){

                this.router.navigate(['apprenant']);
                return response; 
                }else if(tokendecoded.roles.includes("ROLE_FORMATEUR")){

                this.router.navigate(['formateur']);
                return response;

                }else if(tokendecoded.roles.includes("ROLE_CM")){

                this.router.navigate(['cm']);
                return response;

                }

            })
          )
   }

}
