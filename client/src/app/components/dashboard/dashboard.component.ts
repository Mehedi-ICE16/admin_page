import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  team: boolean = false;

  constructor() { }
 teamClicked(){
   this.team = !this.team;
 }
}