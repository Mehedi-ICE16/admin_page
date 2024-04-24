import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDepartment } from '../../interfaces/department.interface';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{  

  showForm: boolean = false;
  deptList!: IDepartment[];
  isLoading: boolean = false;

  constructor( private deptApi: DepartmentService) {}

  ngOnInit(): void {
    this.showLoader();

    this.deptApi.getAllDepartment().subscribe(data => {
      this.deptList = data;
    })
  }

  hideAddDepartmentForm(event: boolean | IDepartment) {
    if(typeof event === 'boolean') this.showForm = event;
    else {
      this.deptApi.addNewDepartment(event).subscribe(res => {
        this.deptList.push(res);
      })
    }
  }

  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
   }

  deptClicked(id: number) {
    
  }

  addDept() {
    this.showForm = true;
  }
    // team: boolean = false;
    // dashboardBGColor: boolean = true;
    // teamBGColor!: boolean;
    // workflowBGColor!: boolean;
    // peopleBGColor!: boolean;
  
    // constructor(private router: Router) { }
  
    // @Output() dataEvent = new EventEmitter<boolean>();
  
    // dashboardClicked(){
    //   this.teamBGColor = false;
    //   this.dashboardBGColor = true;
    //   this.workflowBGColor = false;
    //   this.peopleBGColor = false;
    //   this.router.navigateByUrl('dashboard');
    // }
  
    
    // teamClicked(){
    //   this.teamBGColor = true;
    //   this.dashboardBGColor = false;
    //   this.workflowBGColor = false;
    //   this.peopleBGColor = false;
    //   this.router.navigateByUrl('teamroles');
    // }
  
    // peopleClicked(){
    //   this.teamBGColor = false;
    //   this.dashboardBGColor = false;
    //   this.workflowBGColor = false;
    //   this.peopleBGColor = true;
    //   this.router.navigateByUrl('people');
    // }
  
    // workflowClicked(){
    //   this.teamBGColor = false;
    //   this.dashboardBGColor = false;
    //   this.workflowBGColor = true;
    //   this.peopleBGColor = false;
    //   this.router.navigateByUrl('workflow1');
    // }
  
    // logout(){
    //   localStorage.removeItem('token');
    //   this.router.navigateByUrl('login');
    // }  
}
