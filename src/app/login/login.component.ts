import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;
  password:string;

  constructor() { }

  ngOnInit() {
  }

  testData(){
    this.userId = 'admin'
    this.password = '1234'
  }

  onToggle(_event){
    console.log(_event);
  }

}
