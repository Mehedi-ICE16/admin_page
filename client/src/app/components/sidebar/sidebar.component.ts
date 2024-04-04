import { Component,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  team: boolean = false;

  constructor(private router: Router) { }

  @Output() dataEvent = new EventEmitter<boolean>();


  teamClicked(){
    this.router.navigateByUrl('teamroles');
  }

  dashboardClicked(){
    this.router.navigateByUrl('dashboard');
  }
}
