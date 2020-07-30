import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HospitalService } from '../hospital.service';
import { HospitalModel } from '../hospital-reg/hospital.model';

@Component({
  selector: 'app-hospital-reg',
  templateUrl: './hospital-reg.component.html',
  styleUrls: ['./hospital-reg.component.css']
})
export class HospitalRegComponent implements OnInit {
  title: String = "Hospital Registation";
  //registerHospital:FormGroup;
  constructor(private hospitalService: HospitalService, private router: Router, private fb:FormBuilder) { }
  hospitalList = new HospitalModel(null,null,null,null,null,null);

  registerHospital = new FormGroup({
    rId: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.minLength(4),Validators.required]),
    hPlace: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.minLength(8),Validators.required]),
    hPhone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10,10}")])
  });

  ngOnInit(): void {
    
  }
  AddHopital(){
    this.hospitalService.newHospital(this.hospitalList);
    console.log("ok");
    alert("Success");
    this.router.navigate(['/hospitalLogin']);
  }

}
