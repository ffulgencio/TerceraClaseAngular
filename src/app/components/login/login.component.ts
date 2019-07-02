import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';
export const user = 'admin';
export const pass = '123456';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public username: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.username = this.usuario.username;

  }

  onClick() {
    if (user === this.usuario.username && pass === this.usuario.password) {
      this._router.navigate(['/home']);
    } else {
      console.log('otorrinalaringologo');
    }
  }

  onChanges(event) {
    console.log(event);
  }

}
