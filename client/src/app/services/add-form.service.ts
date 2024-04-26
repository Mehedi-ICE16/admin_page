import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFormService {


  constructor(private http: HttpClient) { }

 
  root = 'http://localhost:3000';

 getAllField(): Observable<any[]> {
    return this.http.get<any>(this.root+'/field-table');
  }

  addNewForm(form: any): Observable<any> {
    return this.http.post<any>(this.root + '/form', form);
  }

  getAllPdfByTeamId(team_id: number): Observable<any[]> {
    return this.http.get<any[]>(this.root + `/team/${team_id}/pdfs`);
  }
}
