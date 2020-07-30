import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CounterService } from '../counter.service';
import { AppointmentModel } from '../appointment/appointment.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
title:String = "Get Your OP"

  constructor(private couterService : CounterService, router : Router ) { }
  patientList = new AppointmentModel(null, null, null, null);
  count = 0;
  ngOnInit(): void {
  }

  BookOP(){
    this.count +=1;
    alert("OP "+this.count);
    this.couterService.newAppointment(this.patientList);
    console.log(this.patientList);
    //location.reload();
  }
  
}
