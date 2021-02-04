import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  url = "/api"
  constructor(private http: HttpClient) { }


  getProfils(){
    return this.http.get(`${this.url}/admin/profils`)
  }
  
  addProfil(profil:any){
    return this.http.post(`${this.url}/admin/profils`, profil)
  }
  
  getProfilById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/profils/${id}`);
  }
  
  updateProfil(updateProfilSortie:any ,id: number){
    return this.http.put(this.url+'/admin/profils/'+ id , updateProfilSortie);
  }
}

 