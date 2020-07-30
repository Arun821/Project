import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DoctorModel } from '../admin/doctor.model';
import { DoctorService} from '../doctor.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
title: String = "Add New Doctors";
// addDoctor:FormGroup;
  constructor(private doctorService: DoctorService, private router: Router, private fb:FormBuilder) { }
  doctorList = new DoctorModel(null, null, null, null, null, null, null);

    
  ngOnInit(): void {
    
  }
  AddDoctor(){
    this.doctorService.newDoctor(this.doctorList);
    console.log(this.doctorList);
    console.log("Added");
    alert("Success");
    this.router.navigate(['/admin']);
  }
}
