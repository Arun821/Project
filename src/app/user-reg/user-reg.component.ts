import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { UserModel } from '../user-reg/user.model';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
title : String = "Sign Up"
  constructor( private userService : UserService, private router:Router) { }
  usersList = new UserModel(null, null, null, null, null);

  ngOnInit(): void {
  }
NewUser(){
  this.userService.newUser(this.usersList);
  console.log("Done");
  alert("Success");
  this.router.navigate(['/login']);
}
}
