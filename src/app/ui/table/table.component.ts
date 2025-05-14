import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ServiceService } from './table.service';
import { Worker } from './table.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule, NgFor],
})

export class TableBasicExample {
  constructor(private service: ServiceService) {};
  dataSource: Worker[] = []
  displayedColumns: string[] = ['id','fullname', 'phone_number', 'rol'];
  data_query: any;

  ngOnInit(){
    this.service.getUsers().subscribe({
      next: (worker) =>{
        this.dataSource = worker;
        console.log(worker)
      }
    })
  }

  deleteUser(id: string){
    this.service.deleteUser(id).subscribe({
      next: () =>{
        this.dataSource = this.dataSource.filter(user => user.id !== id);
      },
      error: (err) => {
        console.error('Error al eliminar usuario:', err);
      }
    })
  }
}
