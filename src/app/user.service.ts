import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { User } from './models/user/user.module';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = "/api"
  Users: any;
  private refreshNeeded = new Subject<void>();

  constructor(private http:HttpClient) { }

  getRefresh(){
    return this.refreshNeeded;
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/admin/users?deleted=0`);
  }

  addUser(user: any){
    return this.http
          .post(this.url+'/admin/users', user)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          )
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/users/${id}`);
  }
  
  updateUser(updateUser:any ,id: number){
    return this.http
      .put(this.url+'/admin/users/'+ id , updateUser)
      .pipe(
        tap(()=>{
          this.refreshNeeded.next();
        })
      )
  }

  deleteUser(id: number){
    return this.http
            .delete(this.url+'/admin/users/'+ id)
            .pipe(
              tap(()=>{
                this.refreshNeeded.next();
              })
            );
  }

  getUserByEmailAndPass(email: string, password: string){
    const user = this.Users.find(
      (u:User) =>{
        return u.email === email && u.password === password;
      }
    )
    return user;
  }

  getToken(){
    const token = localStorage.getItem('token');
    if(token != 'undefined'){
      return token
    }else{
      return null;
    }
  }

}
