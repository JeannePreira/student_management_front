import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { User } from './models/user/user.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = "/api"
  Users: any;
  
  constructor(private http:HttpClient) { }


  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/admin/users`);
  }

  addUser(user: any){
    return this.http.post(this.url+'/admin/users', user)
  }

  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/user/${id}`);
  }
  
  updateUser(updateUser:any ,id: number){
    return this.http.put(this.url+'/admin/users/'+ id , updateUser);
  }

















  // findUserById(id: number){
  //   const user = this.Users.find(
  //     (u:User) =>{
  //       return u.id === id;
  //     }
  //   )
  //   return user;
  // }

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
