import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this.router.navigate(['/admin'])
  }

}
