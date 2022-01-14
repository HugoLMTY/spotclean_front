import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  console.log('wassup')
  }

  loginAction() {
	  console.log('login')
  }

  registerAction() {
	  console.log('register')
  }

}
