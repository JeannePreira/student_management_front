import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  url = "/api";
  private refreshNeeded = new Subject<void>();

  constructor(private http: HttpClient) { }

  getRefresh(){
    return this.refreshNeeded;
  }

  getProfilSortie(){
    return this.http.get(`${this.url}/admin/profilsSorties?statut=0`)
  }
  
  addProfilSortie(profilsortie:any){
    return this.http
          .post(`${this.url}/admin/profilSortie`, profilsortie)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          )
  }

  getPsById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/profilSorties/${id}`);
  }
  
  updateProfilSortie(updateProfilSortie:any ,id: number){
    return this.http
          .put(this.url+'/admin/profilSorties/'+ id , updateProfilSortie)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          );
  }

  deleteProfilSortie(id: number){
    return this.http
          .delete(this.url+'/admin/profilSorties/'+ id)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          );
  }
}
