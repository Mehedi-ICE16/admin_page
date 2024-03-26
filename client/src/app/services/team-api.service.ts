import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeam } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamApiService {

  root = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getAllTeam () : Observable<ITeam[]> {
    return this.http.get<ITeam[]>(this.root + '/team');
  }
}
