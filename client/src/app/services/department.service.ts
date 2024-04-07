import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  root = 'http://localhost:3000';

 getAllDepartment(): Observable<any[]> {
    return this.http.get<any[]>(this.root+'/department');
  }
}
