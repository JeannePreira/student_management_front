import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  url = "/api"
  constructor(private http: HttpClient) { }

  getCompetence(){
    return this.http.get(`${this.url}/admin/competences`)
  }

  addCompetence(competence: any){
    return this.http.post(`${this.url}/admin/competences`, competence)
  }
}
