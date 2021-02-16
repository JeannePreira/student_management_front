import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  url = "/api"
  private refreshNeeded = new Subject<void>();

  constructor(private http:HttpClient) { }

  getRefresh(){
    return this.refreshNeeded;
  }

  getGroupeCompetence(){
    return this.http.get(`${this.url}/admin/grpecompetences?statut=0`)
  }

  addGroupeCompetence(grpecompetences:any){
    return this.http
          .post(`${this.url}/admin/grpecompetences`, grpecompetences)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          );
  }

  getGroupeCompetenceById(id: number): Observable<any>{
    return this.http.get(`${this.url}/admin/grpecompetences/${id}`);
  }

  updateGroupeCompetence(grpecompetences:any, id:number){
    return this.http
          .put(`${this.url}/admin/grpecompetences/${id}`, grpecompetences)
          .pipe(
            tap(()=>{
              this.refreshNeeded.next();
            })
          );
  }

  deleteCompetence(id: number){
    return this.http
            .delete(this.url+'/admin/grpecompetences/'+ id)
            .pipe(
              tap(()=>{
                this.refreshNeeded.next();
              })
            );
  }
}
