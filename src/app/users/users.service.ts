import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './users';
import { CreateOrUpdateUser } from './create-or-update-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  create(users: CreateOrUpdateUser){
    return this.http.post('http://localhost:3000/users', users);
  }

  getById(id:string){
    return this.http.get<Users>(`http://localhost:3000/users/${id}`);
  }

  update(id:string, users:CreateOrUpdateUser){
    return this.http.put(`http://localhost:3000/users/${id}`, users);
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
