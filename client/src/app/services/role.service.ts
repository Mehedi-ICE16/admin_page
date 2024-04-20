import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITeamRole} from '../interfaces/team-role.interface';
import { IRole } from '../interfaces/role.interface'

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { }
  rootUrl = 'http://localhost:3000';

  getAllRole(teamId: number): Observable<any> {
    return this.http.get<any>(this.rootUrl + '/team/role/' + teamId);
  }

  addRole(role: ITeamRole): Observable<IRole> {
    return this.http.post<IRole>(this.rootUrl + '/role', role);
  }

  deleteTeamRole(roleId: number | undefined, teamId: number): Observable<IRole> {
    return this.http.delete<IRole>(this.rootUrl + '/role/' + roleId+'/'+teamId);
  }
}
