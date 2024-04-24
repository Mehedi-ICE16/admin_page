import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { IDepartment } from '../../interfaces/department.interface';

@Component({
  selector: 'add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  addNewDept!: FormGroup;
  @Output() addDepartmentEvent = new EventEmitter<boolean | IDepartment>();

  constructor(private fb: FormBuilder, private deptApi: DepartmentService) {}

  ngOnInit(): void {
    this.addNewDept = this.fb.group({
      name: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required])
    })
  }

  onAddDepartment(){   
    this.addDepartmentEvent.emit(false);
    const { name , description } = this.addNewDept.value;
    const dept = {name,description};
    // console.log(role);
    this.deptApi.addNewDepartment(dept).subscribe(res => {
      // console.log(res);
      this.addDepartmentEvent.emit(res);
    });
    this.addNewDept.reset();
  }

  cancelClicked(){
    this.addDepartmentEvent.emit(false);
  }
}
