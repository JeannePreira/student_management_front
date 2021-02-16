import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: AuthService, private userService: UserService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
   
    const token = this.userService.getToken();
    if (token) {
    return true;
    }
    else {
      this.router.navigate(['']);;
      Swal.fire({
        icon: 'error',
        title: 'Utilisateur Déconnecté!',
        text: 'Reconnectez-vous!',
        position: 'top'
      })
    return false;
    }
      }
  
}
