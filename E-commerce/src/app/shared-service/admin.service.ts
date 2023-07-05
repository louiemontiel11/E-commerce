import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  localStorage = new BehaviorSubject<any>([]);
  constructor() { }

  getLocalStorage(){
    return this.localStorage.asObservable();
  }
  setAdmin(user){
    this.localStorage.next(user);
  }
}
