import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  url = "/api"
  constructor(private http: HttpClient) { }


  getProfilSortie(){
    return this.http.get(`${this.url}/admin/profilsSorties`)
  }
  
  addProfilSortie(profilsortie:any){
    return this.http.post(`${this.url}/admin/profilSortie`, profilsortie)
  }

  getPsById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/profilSorties/${id}`);
  }
  
  updateProfilSortie(updateProfilSortie:any ,id: number){
    return this.http.put(this.url+'/admin/profilSorties/'+ id , updateProfilSortie);
  }
}
