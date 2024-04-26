import { Component,OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { IPeople } from '../../interfaces/people.interface';
import { EmployeeService } from '../../services/employee.service';
// import { EventTarget } from 'rxjs';

export interface SelectedPeople {
         employee: IPeople;
         roleName: string;
         teamName: string
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {

  peoples!: IPeople[];
  isLoading: boolean = false;
  selectedPeople!: SelectedPeople;
  searchTerm$ = new Subject<string>();
  
  showForm: boolean | IPeople = false;
  hideAddEmployeeForm(event: boolean | IPeople) {
    if(typeof event === 'boolean') this.showForm = event;
    else {
      this.peopleApi.addNewEmployee(event).subscribe(res => {
        this.peoples.push(res);
      })
    }
  }

  constructor ( private peopleApi: EmployeeService) { }

  ngOnInit(): void {

    this.searchTerm$
  .pipe(
    debounceTime(500), // Adjust the debounce time as needed
    distinctUntilChanged()
  )
  .subscribe((searchTerm: string | number) => {
    // Call your search function here with the searchTerm
    this.search(searchTerm);
  });


    this.showLoader();
    this.peopleApi.getAllPeople().subscribe(res => this.peoples = res);
    this.peopleApi.getOnePeople(1).subscribe(res => {
      this.selectedPeople = res;
    });
  }

  search(searchTerm: string | number) {
    // Implement your search logic here
    console.log(searchTerm);
    this.showLoader();
    this.peopleApi.getOnePeople(searchTerm).subscribe(res => {
      this.selectedPeople = res;
    });
  }
  

  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
   }

   showDetails(id: number | undefined){
    this.showLoader();
     this.peopleApi.getOnePeople(id).subscribe(res => {
       this.selectedPeople = res;
     });
   }

}
