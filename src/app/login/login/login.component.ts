import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: 'prueba1',
    password: '123'
  }

  constructor(
    private authService : AuthService,
    private router : Router
    ) {  }

  ngOnInit(): void {
  }

  login() {
    console.log();
    this.authService.signin(this.user).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['home']);
    })
  }

}
