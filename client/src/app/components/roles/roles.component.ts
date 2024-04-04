import { Component,OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { SharedDataService } from '../../services/shared-data.service';

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

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  listOfData: DataItem[] = [  ];
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
      this.teamEmployee = this.listOfData = data.employees;
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

}
