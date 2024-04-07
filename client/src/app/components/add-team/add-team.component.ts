import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { TeamApiService } from '../../services/team-api.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent implements OnInit {
  addNewTeam!: FormGroup;
  departments!: any[];

  @Output() hideAddForm = new EventEmitter<any>();
   constructor(private fb: FormBuilder, private deptService: DepartmentService, private teamApi: TeamApiService, private sharedData: SharedDataService) { }

  ngOnInit(){

    this.deptService.getAllDepartment().subscribe(data => {
      this.departments = data;
      console.log(this.departments[0].name);
    });

    this.addNewTeam = this.fb.group({
      teamName: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required]),
      selectDepartment: this.fb.control('',[Validators.required]),
      requiredPDF: this.fb.array([])
    })
  }

  get requiredPDF() {
    return this.addNewTeam.get('requiredPDF') as FormArray;
  }

  addPDF() {
    this.requiredPDF.push(this.fb.control(''));
  }

  pdf:string[] = [];
  getInputtedPDF(i:number){
    const control = this.requiredPDF.at(i);
    // console.log(control.value);
    this.pdf.push(control.value);
    // console.log(this.pdf);
  }

 onAddTeam(){
    const { teamName , description,selectDepartment } = this.addNewTeam.value;
    const team = {name:teamName,description,dept_id:selectDepartment,required_pdf:this.pdf};
    // console.log(team);

    this.teamApi.addTeam(team).subscribe(res => this.hideAddForm.emit({showForm: false,res}));
  
  }

  cancelClicked(){
    this.hideAddForm.emit(false);
  }
}
