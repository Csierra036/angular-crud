import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async getUsers(): Promise<Array<any>>{
    const result = await axios.get('http://localhost:8000/worker');
    return result.data
  }
}
