import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  url = "/api"
  constructor(private http: HttpClient) { }

  getGroupeCompetence(){
    return this.http.get(`${this.url}/admin/grpecompetences`)
  }

  addGroupeCompetence(grpecompetences:any){
    return this.http.post(`${this.url}/admin/grpecompetences`, grpecompetences)
  }
}
