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

@Component({
  selector: 'team-roles2',
  templateUrl: './team-roles2.component.html',
  styleUrl: './team-roles2.component.css'
})
export class TeamRoles2Component {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Employee Id',
      sortOrder: 'ascend',
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim', byDefault: true }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Employee Name',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Employee Email',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email),
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (email: string, item: DataItem) => item.email.indexOf(email) !== -1
    },
    {
      name: 'Choose Team Role',
      sortOrder: null,
      sortFn: null,
      listOfFilter: [],
      filterFn: null,
      filterMultiple: false,
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
    }
  ];
}
