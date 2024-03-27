import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  id: number;
  name: string;
  email: string;
  role: string;
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

import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'team-roles2',
  templateUrl: './team-roles2.component.html',
  styleUrl: './team-roles2.component.css'
})
export class TeamRoles2Component {

  selectedTeam: string = 'Team 1';

  employeeListOfSelectedTeam: any[] = [];

  constructor( private sharedService: SharedDataService) {
    this.employeeListOfSelectedTeam = this.sharedService.getEmployeeListOfSelectedTeam();
    console.log( "employee list: "+this.employeeListOfSelectedTeam)
  }


  options = ['Admin','Reviewer','Maker','Checker'];
  selectedOption: string = 'Admin';
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
  listOfData: DataItem[] = [
    {
      id: 1,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 2,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 3,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 4,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 1,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 2,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 3,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 4,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 1,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 2,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 3,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    },
    {
      id: 4,
      name: 'John Brown',
      email: 'New York No. 1 Lake Park',
      role: 'admin'
    }
  ];
}
