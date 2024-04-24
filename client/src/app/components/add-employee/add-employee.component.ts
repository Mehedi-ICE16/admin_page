import { Component,EventEmitter, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IPeople } from '../../interfaces/people.interface';
import { ITeam } from '../../interfaces/team.interface';
import { IRole } from '../../interfaces/role.interface';
import { TeamApiService } from '../../services/team-api.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {  
    addNewEmployee!: FormGroup;
    teams!: ITeam[];
    roles!: IRole[];
    @Output() addEmployeeEvent = new EventEmitter<boolean | IPeople>();
  
    constructor(private fb: FormBuilder, private employeeApi: EmployeeService, private teamApi: TeamApiService, private roleApi: RoleService) {}
  
    ngOnInit(): void {
      this.addNewEmployee = this.fb.group({
        name: this.fb.control('',[Validators.required]),
        age: this.fb.control('',[Validators.required]),
        email: this.fb.control('',[Validators.required, Validators.email]),
        phone: this.fb.control('',[Validators.required]),
        admin: this.fb.control('',[Validators.required]),
        team: this.fb.control('',[Validators.required]),
        role: this.fb.control('',[Validators.required]),
        active: this.fb.control('true'),
      })

      this.teamApi.getAllTeam().subscribe(data => {
        this.teams = data;
      })

      this.roleApi.getAllRoles().subscribe(data => {
        this.roles = data;
      })
    }
  
    onAddEmployee(){   
      this.addEmployeeEvent.emit(false);
      const { name,age,email,phone,admin,team,role,active } = this.addNewEmployee.value;
      const employee = { name,age,email,phone,admin,team_id: team,role_id: role,active };
      // console.log(role);
      this.employeeApi.addNewEmployee(employee).subscribe(res => {
        // console.log(res);
        this.addEmployeeEvent.emit(res);
        // this.roles.push(res);
      });
      this.addNewEmployee.reset();
    }
  
    cancelClicked(){
      this.addEmployeeEvent.emit(false);
    }
}
  
