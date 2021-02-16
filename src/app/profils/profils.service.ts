import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  url = "/api"
  private refreshNeeded = new Subject<void>();
  
  constructor(private http: HttpClient) { }

  getRefresh(){
    return this.refreshNeeded;
  }

  getProfils(){
    return this.http.get(`${this.url}/admin/profils?statut=0`)
  }
  
  addProfil(profil:any){
    return this.http
      .post(`${this.url}/admin/profils`, profil)
      .pipe(
        tap(()=>{
          this.refreshNeeded.next();
        })
      )
  }
  
  getProfilById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/profils/${id}`);
  }
  
  updateProfil(updateProfilSortie:any ,id: number){
    return this.http
      .put(this.url+'/admin/profils/'+ id , updateProfilSortie)
      .pipe(
        tap(()=>{
          this.refreshNeeded.next();
        })
      );
  }

  deleteProfil(id: number){
    return this.http
          .delete(this.url+'/admin/profils/'+ id)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          );;
  }
}

 