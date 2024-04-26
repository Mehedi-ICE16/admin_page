import { Component,EventEmitter,OnInit, Output,Input } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { IRole } from '../../interfaces/role.interface';

@Component({
  selector: 'add-role',
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent implements OnInit{
  
  addNewRole!: FormGroup;
  @Output() addRoleEvent = new EventEmitter<boolean | IRole>();
  @Input() team_id!: number;

  constructor(private fb: FormBuilder, private roleApi: RoleService) {}

  ngOnInit(): void {
    this.addNewRole = this.fb.group({
      roleName: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required]),
      access: this.fb.control('',[Validators.required]),
      sequence: this.fb.control('',[Validators.required]),
      isAuthor: this.fb.control('true'),
    })
  }

  onAddRole(){   
    this.addRoleEvent.emit(false);
    const { roleName,description,access,sequence,isAuthor } = this.addNewRole.value;
    const role = {name:roleName,description,access,sequence,isAuthor,team_id: this.team_id};
    // console.log(role);
    this.roleApi.addRole(role).subscribe(res => {
      console.log(res);
      this.addRoleEvent.emit(res);
      // this.roles.push(res);
    });
    this.addNewRole.reset();
  }

  cancelClicked(){
    this.addRoleEvent.emit(false);
  }
}
