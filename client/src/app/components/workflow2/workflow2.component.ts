import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { TeamApiService } from '../../services/team-api.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../../services/role.service';
import { ITeam } from '../../interfaces/team.interface';
import { IRole } from '../../interfaces/role.interface';


interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}


@Component({
  selector: 'app-workflow2',
  templateUrl: './workflow2.component.html',
  styleUrl: './workflow2.component.css'
})
export class Workflow2Component {
  teamName: string = 'A/C opening List';
  teamId!: number;
  isLoading: boolean = false;
  roles: IRole[] = [];
  addForm: boolean = false;
  teams: ITeam[] = [];
  showAddForm: boolean = false;
  addNewRole!: FormGroup;
  roleId!: number | undefined;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private roleApi: RoleService, private teamApi: TeamApiService) { }

  i = 0;
  editId!: number|undefined;
  listOfData: ItemData[] = [];

  startEdit(id: number|undefined): void {
    this.editId = id;
  }

  createForm(id: number | undefined): void {
    this.showAddForm = !this.showAddForm;
    this.roleId = id;
    console.log(this.showAddForm,this.roleId);
  }

  stopEdit(): void {
    this.editId = 0;
  }

  deleteRole(id: number|undefined): void {
    // this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  editRole(id: number | undefined) {

  }


  ngOnInit(): void {
    this.showLoader();
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
    })

    this.roleApi.getAllRole(this.teamId).subscribe(data => {
      console.log(data);
      this.teamName = data.name;
      this.roles = data.roles;
    })

    this.teamApi.getAllTeam().subscribe({
      next: data => {
        this.teams = data.sort((a,b) => a.id - b.id );
      },
      error: err => {
        console.error(err);
      }
    })

    this.addNewRole = this.fb.group({
      roleName: this.fb.control('',[Validators.required]),
      description: this.fb.control('',[Validators.required]),
      access: this.fb.control('',[Validators.required]),
      sequence: this.fb.control('',[Validators.required]),
      isAuthor: this.fb.control('true'),
    })
  }

  onAddRole(){   
    this.addForm = false;
    const { roleName , description,selectTeam,access,sequence,isAuthor } = this.addNewRole.value;
    const role = {name:roleName,description,team_id:this.teamId,access,sequence,isAuthor};
    // console.log(role);
    this.roleApi.addTeamRole(role).subscribe(res => {
      // console.log(res);
      this.roles.push(res);
    });
    this.addNewRole.reset();
  }

  cancelClicked(){
    this.addForm = false;
  }
  removeRole(id: number | undefined) {
    this.roleApi.deleteTeamRole(id,this.teamId).subscribe( );
  }
  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
   }
    
}
