import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateWorker{
  email: string;
  fullname: string;
  phone_number: string;
  rol: string;
}

export interface Worker {
  id: string;
  fullname: string;
  phone_number: string;
  rol: string;
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Worker[]> {
    return this.http.get<Worker[]>('http://localhost:8000/worker');
  }

  deleteUser(id: string) {
    return this.http.delete(`http://localhost:8000/worker/${id}`);
  }

  createUser(worker: CreateWorker){
    return this.http.post<Worker>('http://localhost:8000/worker', worker);
  }
}
