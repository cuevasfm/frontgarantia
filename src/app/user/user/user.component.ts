import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserService, User } from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  url = 'http://localhost:3000/user';
  usuarios: any = [];
  userNew: User = { id: '', username: '', password: '', correo: '', telefono: '' };
  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => { this.usuarios = res },
      err => { console.log(err) }
    );
  }

  saveUser() {
    this.userService.addUser(this.userNew).subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    );
    this.router.navigate(['/user']);
  }
}
