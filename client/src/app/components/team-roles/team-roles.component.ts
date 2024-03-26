import { Component,OnInit } from '@angular/core';
import { TeamApiService } from '../../services/team-api.service';
import { ITeam } from '../../interfaces/team.interface';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent implements OnInit {

  teams: ITeam[] = [];

  constructor(private teamApi: TeamApiService, private employeeApi: LoginApiService) { }

  ngOnInit(): void {
    this.teamApi.getAllTeam().subscribe({
      next: data => {
        this.teams = data;
      },
      error: err => {
        console.error(err);
      }
    })
  }

  teamClicked(i: number) {
    this.employeeApi.getAllEmployee(this.teams[i].id).subscribe(data => {
      console.log(data);
    })
  }

}
