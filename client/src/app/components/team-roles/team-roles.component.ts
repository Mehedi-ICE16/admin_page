import { Component,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsComponent } from '../teams/teams.component';

@Component({
  selector: 'team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent  {

  enableAddform: boolean = false;
  isLoading!: boolean;

  @ViewChild(TeamsComponent) teams!: TeamsComponent;

  constructor( public router: Router) { }

  teamClicked() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
   }
   addTeamEvent(enableTeamAdd: boolean) {
    this.enableAddform = enableTeamAdd;
   }

   hideTeamEvent(enableTeamAdd: any) {
    const { showForm,res } = enableTeamAdd;
    this.enableAddform = false;
    console.log(this.enableAddform);
    this.teams.showTeams(res);
   }

  }

