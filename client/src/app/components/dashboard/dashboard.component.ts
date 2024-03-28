import { Component,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  team: boolean = false;

  constructor() { }
 teamClicked(team: boolean) {
   this.team = !team;
 }
}