import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent  {

  enableAddform: boolean = false;
  isLoading!: boolean;
  constructor( public router: Router) { }

  teamClicked() {

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
   }
   addTeamEvent(enableTeamAdd: boolean){
    this.enableAddform = enableTeamAdd;
   }

  }

