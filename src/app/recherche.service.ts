import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  private StringSource = new BehaviorSubject('');
  currentSearch = this.StringSource.asObservable();

  constructor() { }

  changeValue(message: string){
    this.StringSource.next(message);
  }
}

