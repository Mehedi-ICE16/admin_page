import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

  root = 'http://localhost:3000';

  getAllEmployee (id:number) : Observable<any> {
    console.log(id);
    return this.http.get<any>(this.root + '/employee/'+id);
  }

  updateEmployeeRole(id:number | undefined,update: any) : Observable<any> {
    return this.http.put<any>(this.root + '/employee/'+id,update);
  }
}
