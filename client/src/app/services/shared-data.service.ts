import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  employeeListOfSelectedTeam: any[] = [];
  constructor() { }

  setEmployeeListOfSelectedTeam(value: any[]) {
    this.employeeListOfSelectedTeam = value;
  }

  getEmployeeListOfSelectedTeam() {
    return this.employeeListOfSelectedTeam;
  }
}
