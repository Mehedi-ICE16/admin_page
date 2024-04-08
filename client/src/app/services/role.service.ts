import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { }
  rootUrl = 'http://localhost:3000';

  getAllRole(teamId: number): Observable<any> {
    return this.http.get<any>(this.rootUrl + '/team/role/' + teamId);
  }

  addRole(role: any): Observable<any> {
    return this.http.post<any>(this.rootUrl + '/role', role);
  }
}
