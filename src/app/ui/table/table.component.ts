import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ServiceService } from './table.service';
import { Worker } from './table.service';

@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule],
})

export class TableBasicExample {
  constructor(private service: ServiceService) {};
  dataSource: Worker[] = []
  displayedColumns: string[] = ['fullname', 'phone_number', 'rol'];
  data_query: any;

  ngOnInit(){
    this.service.getUsers().subscribe({
      next: (worker) =>{
        this.dataSource = worker;
        console.log(worker)
      }
    })
  }
}
