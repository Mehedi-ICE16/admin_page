import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor() { }

  sendData(employees: any,roles: any[],name: string) {
    const teamEmployee:{} = {employees,roles,name};
    this.dataSubject.next(teamEmployee);
  }

}
