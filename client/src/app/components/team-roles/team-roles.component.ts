import { Component,OnInit } from '@angular/core';
import { TeamApiService } from '../../services/team-api.service';
import { ITeam } from '../../interfaces/team.interface';
import { LoginApiService } from '../../services/login-api.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent implements OnInit {

  teams: ITeam[] = [];
  employee:any[] = [];
  teamName: string = '';

  constructor(private teamApi: TeamApiService, private employeeApi: LoginApiService, private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.teamApi.getAllTeam().subscribe({
      next: data => {
        console.log(data);
        this.teams = data;
        this.teamName = this.teams[0].name;
        this.employeeApi.getAllEmployee(this.teams[0].id).subscribe(data => {
          this.employee = data;
          this.sharedService.sendData(this.employee,this.teamName);
          console.log(data);
        })
      },
      error: err => {
        console.error(err);
      }
    })
  }

  teamClicked(i: number) {
    this.teamName = this.teams[i].name;
     this.employeeApi.getAllEmployee(this.teams[i].id).subscribe(data => {
      this.employee = data;
      this.sharedService.sendData(this.employee,this.teamName);
      console.log(data);
    })
  }

}
