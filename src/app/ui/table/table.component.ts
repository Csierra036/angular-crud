import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ServiceService } from './service/service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  lastname: number;
  year: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cristian', lastname: 1.0079, year: 'H'},
  {position: 2, name: 'Sofia', lastname: 4.0026, year: 'He'},
  {position: 3, name: 'Laura', lastname: 6.941, year: 'Li'},
  {position: 4, name: 'Lautaro', lastname: 9.0122, year: 'Be'},
  {position: 5, name: 'Jesus', lastname: 10.811, year: 'B'},
  {position: 6, name: 'Caracol', lastname: 12.0107, year: 'C'},
  {position: 7, name: 'Ariel', lastname: 14.0067, year: 'N'},
  {position: 8, name: 'Felipe', lastname: 15.9994, year: 'O'},
  {position: 9, name: 'Chavista', lastname: 18.9984, year: 'F'},
  {position: 10, name: 'Diputado', lastname: 20.1797, year: 'Ne'},
];


@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  imports: [MatTableModule],
})

export class TableBasicExample {
  constructor(private service: ServiceService) {};

  ShowUsers(){
    return this.service.getUsers();
  }

  displayedColumns: string[] = ['fullname', 'phone_number', 'rol'];
  dataSource = this.ShowUsers()
  data_query: any;
  
  ngOnInit(): void {
    // Initialization logic here
  }
}
