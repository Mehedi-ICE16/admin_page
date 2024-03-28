import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  employeeListOfSelectedTeam: any[] = [];
  constructor() { }

  sendData(data: any,name: string) {
    const teamEmployee:{} = {data,name};
    this.dataSubject.next(teamEmployee);
  }

}
