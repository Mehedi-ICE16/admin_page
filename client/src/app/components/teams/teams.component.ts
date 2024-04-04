import { Component,OnInit } from '@angular/core';
import { TeamApiService } from '../../services/team-api.service';
import { ITeam } from '../../interfaces/team.interface';
import { EmployeeService } from '../../services/employee.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams: ITeam[] = [];
  employee:any[] = [];
  teamName: string = '';

  constructor(private teamApi: TeamApiService, private employeeApi: EmployeeService, private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.teamApi.getAllTeam().subscribe({
      next: data => {
        console.log(data);
        this.teams = data;
        this.teamName = this.teams[0].name;
        this.employeeApi.getAllEmployee(this.teams[0].id).subscribe(data => {
          this.employee = data;
          this.sharedService.sendData(this.employee,this.teamName);
          // console.log("Team "+ data+" "+this.teamName);
          console.log(this.employee);
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
