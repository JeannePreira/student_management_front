import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  url = "/api"
  constructor(private http: HttpClient) { }

  getReferentiel(){
    return this.http.get(`${this.url}/admin/referentiel`)
  }

  addReferentiel(referentiel:any){
    return this.http.post(`${this.url}/admin/referentiel`, referentiel)
  }

  // updateReferentiel(referentiel:any, id:number){
  //   return this.http
  //         .put(`${this.url}/admin/referentiel/${id}`, referentiel)
  // }
         
}
