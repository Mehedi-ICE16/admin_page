import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent  {

  isLoading!: boolean;
  constructor( public router: Router) { }

  teamClicked(team: boolean) {

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
   }

  }

