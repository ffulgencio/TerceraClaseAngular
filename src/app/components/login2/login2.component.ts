import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  public userName: string;
  public password: number;

  constructor() { }

  ngOnInit() {
  }

  checkUser() {
    console.log(this.userName, this.password);
  }

}
