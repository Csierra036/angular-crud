import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ServiceService } from './table.service';
import { Worker, CreateWorker } from './table.service';
import { NgFor } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule, NgFor, FormsModule],
})

export class TableBasicExample {
  constructor(private service: ServiceService) {};
  dataSource: Worker[] = []
  displayedColumns: string[] = ['id','fullname', 'phone_number', 'rol'];
  data_query: any;
  newUser: CreateWorker = {
    fullname: '',
    phone_number: '',
    rol: '',
    email: ''
  }

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


  addUser() {
    this.service.createUser(this.newUser).subscribe({
      next: (user: Worker) => {
        this.dataSource.push(user); // o puedes llamar a loadUsers() si prefieres recargar
        this.newUser = { fullname: '', phone_number: '', rol: '', email: '' }
      },
      error: (err) => {
        console.error('Error al crear usuario:', err);
      }
    });
  }

}
