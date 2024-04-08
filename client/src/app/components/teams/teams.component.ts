import { Component,EventEmitter,OnInit, Output,Input } from '@angular/core';
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
  roles:any[] = [];
  teamName: string = '';
  // @Input() newTeamAdded: boolean = false;

  @Output() addTeamEvent = new EventEmitter<boolean>();
  @Output() addLoader = new EventEmitter<boolean>();

  constructor(private teamApi: TeamApiService, private employeeApi: EmployeeService, private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.addLoader.emit();

    this.teamApi.getAllTeam().subscribe({
      next: data => {
        this.teams = data;
        console.log(this.teams);
        this.teamName = this.teams[0].name;
        this.employeeApi.getAllEmployee(this.teams[0].id).subscribe(data => {
          const { roles,employees } = data;
          this.employee = employees;
          this.roles = roles;
          this.sharedService.sendData(this.employee,this.roles,this.teamName);
        })
      },
      error: err => {
        console.error(err);
      }
    })
  }

  showTeams(newTeam: any) {
    if(newTeam) this.teams.push(newTeam);
    // console.log(this.teams);
  }

  teamClicked(i: number) {
    this.teamName = this.teams[i].name;
    this.addLoader.emit();
     this.employeeApi.getAllEmployee(this.teams[i].id).subscribe(data => {
      console.log(data);
      const { roles,employees } = data;
      this.employee = employees;
      this.roles = roles;
      this.sharedService.sendData(this.employee,this.roles,this.teamName);
      console.log(data);
    })
  }

  addTeam(){
    this.addTeamEvent.emit(true);
  }
}
