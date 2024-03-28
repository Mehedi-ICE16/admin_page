import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  id: number;
  name: string;
  email: string;
  role: string;
  phone?: string;
  active?: boolean;
  admin?: boolean;
  role_id?: number;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

import { Component,OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'team-roles2',
  templateUrl: './team-roles2.component.html',
  styleUrl: './team-roles2.component.css'
})
export class TeamRoles2Component implements OnInit{

  selectedTeam: string = 'Team 1';
  teamEmployee: [] = [];
  roleName: string[] = [];
  roleId: number[] = [];
  selectedRoleClass!: string;

  constructor( private sharedService: SharedDataService) { 
    this.selectedRoleClass = 'reviewer';
   }

  ngOnInit(): void {
    this.sharedService.data$.subscribe(data => {
      console.log("team&roles2: " + data.roleName );
      this.roleName = data.data.roleName;
      this.teamEmployee = this.listOfData = data.data.employees;
      console.log(data.employees);
      console.log(data.data.roleName[data.data.roleId.indexOf(data.data.employees[0].role_id)]);
      this.roleId = data.data.roleId;
      this.selectedTeam = data.name;
    });
  }

  selectedRole!: string;

  onRoleChange(event: any,i:number) {
    this.selectedRole = event.target.value;
    console.log(this.selectedRole);
  }
  listOfColumns: ColumnItem[] = [
    {
      name: 'Employee Id',
      sortOrder: 'ascend',
      sortFn: (a: DataItem, b: DataItem) => a.id - b.id,
      sortDirections: ['ascend', null],
      filterMultiple: true,
      listOfFilter: [
      ],
      filterFn: null
    },
    {
      name: 'Employee Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend','descend', null],
      listOfFilter: [],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1),
      filterMultiple: true
    },
    {
      name: 'Employee Email',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email),
      filterMultiple: false,
      listOfFilter: [],
      filterFn: (email: string, item: DataItem) => item.email.indexOf(email) !== -1
    },
    {
      name: 'Choose Team Role',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.role.localeCompare(b.role),
      listOfFilter: [{
        text: 'admin',
        value: 'admin'
      },
      {
        text: 'Reviewer',
        value: 'Reviewer'
      },
      {
        text: 'Maker',
        value: 'Maker'
      },
      {
        text: 'Checker',
        value: 'Checker'
      }],
      filterFn: (role: string, item: DataItem) => item.role.indexOf(role) !== -1,
      filterMultiple: true,
      sortDirections: ['ascend', 'descend', null]
    }
  ];
  listOfData: DataItem[] = [  ];
}
