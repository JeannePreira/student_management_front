import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  url = "/api"
  private refreshNeeded = new Subject<void>();

  constructor(private http:HttpClient) { }

  getRefresh(){
    return this.refreshNeeded;
  }

  getCompetence(){
    return this.http.get(`${this.url}/admin/competences?statut=0`)
  }

  getCompetenceById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/competences/${id}`);
  }
  
  addCompetence(competence: any){
    return this.http
            .post(`${this.url}/admin/competences`, competence)
            .pipe(
              tap(()=>{
                this.refreshNeeded.next();
              })
            );
  }

  updateCompetence(updateCompetence:any ,id: number){
    return this.http
            .put(this.url+'/admin/competences/'+ id , updateCompetence)
            .pipe(
              tap(()=>{
                this.refreshNeeded.next();
              })
            );
  }
  
  deleteCompetence(id: number){
    return this.http
            .delete(this.url+'/admin/competences/'+ id)
            .pipe(
              tap(()=>{
                this.refreshNeeded.next();
              })
            );;
  }
}
