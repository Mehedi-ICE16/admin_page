import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  constructor() { }

  sendData(employees: any,name: string) {
    const teamEmployee:{} = {employees,name};
    this.dataSubject.next(teamEmployee);
  }

}
