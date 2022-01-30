import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.url);
  }

  addUser(user: User) {
    return this.http.post(this.url, user);
  }

  /*

    getUnEquipo(id:string){
      return this.http.get(this.url+'/'+id);
    }



    deleteEquipo(id:string){
      return this.http.delete(this.url+'/'+id);
    }
    editEquipo(id:string, equipo:Equipo){
      return this.http.put(this.url+'/'+id, equipo);
    } */

}
export interface User {
  id?: string;
  username?: string;
  password?: string;
  correo?: string;
  telefono?: string;
}
