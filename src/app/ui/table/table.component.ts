import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ServiceService } from './table.service';
import { Worker, CreateWorker, EditWorker } from './table.service';
import { NgFor } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-table',
  styleUrl: './table.component.css',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule, NgFor, FormsModule, NgIf, NgClass],
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
  showModal = false;
  editing: boolean = false;
  editingId: string | null = null;

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

    this.closeModal()
  }


  startEditUser(user: Worker) {
    this.newUser = {
      fullname: user.fullname,
      phone_number: user.phone_number,
      rol: user.rol,
      email: user.email
    };
    this.editing = true;
    this.editingId = user.id;
    this.openModal();
  }


  updateUser() {
    if (!this.editingId) return;

    this.service.editUser(this.editingId, this.newUser).subscribe({
      next: (updatedUser: Worker) => {
        const index = this.dataSource.findIndex(u => u.id === this.editingId);
        if (index !== -1) this.dataSource[index] = updatedUser;
        this.newUser = { fullname: '', phone_number: '', rol: '', email: '' };
        this.editing = false;
        this.editingId = null;
      },
      error: (err) => {
        console.error('Error al editar usuario:', err);
      }
    });

    this.closeModal();
  }

  resetForm() {
    this.newUser = { fullname: '', phone_number: '', rol: '', email: '' };
    this.editing = false;
    this.editingId = null;
  }

  openModal(){
    this.showModal = true;
  }


  closeModal(){
    this.showModal = false;
  }

}
