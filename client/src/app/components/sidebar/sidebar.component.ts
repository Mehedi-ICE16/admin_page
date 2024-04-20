import { Component,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  team: boolean = false;
  dashboardBGColor: boolean = true;
  teamBGColor!: boolean;
  workflowBGColor!: boolean;
  peopleBGColor!: boolean;

  constructor(private router: Router) { }

  @Output() dataEvent = new EventEmitter<boolean>();

  dashboardClicked(){
    this.teamBGColor = false;
    this.dashboardBGColor = true;
    this.workflowBGColor = false;
    this.peopleBGColor = false;
    this.router.navigateByUrl('dashboard');
  }

  
  teamClicked(){
    this.teamBGColor = true;
    this.dashboardBGColor = false;
    this.workflowBGColor = false;
    this.peopleBGColor = false;
    this.router.navigateByUrl('teamroles');
  }

  peopleClicked(){
    this.teamBGColor = false;
    this.dashboardBGColor = false;
    this.workflowBGColor = false;
    this.peopleBGColor = true;
    this.router.navigateByUrl('people');
  }

  workflowClicked(){
    this.teamBGColor = false;
    this.dashboardBGColor = false;
    this.workflowBGColor = true;
    this.peopleBGColor = false;
    this.router.navigateByUrl('workflow1');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
}
