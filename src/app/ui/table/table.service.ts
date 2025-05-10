import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Worker {
  fullname: string;
  phone_number: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Worker[]> {
    return this.http.get<Worker[]>('http://localhost:8000/worker');
  }
}
