import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isCollapsed = false;
  team: boolean = false;

  @Output() dataEvent = new EventEmitter<boolean>();


  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  teamClicked(){
    this.dataEvent.emit(this.team);
    this.team = !this.team;
  }
}
