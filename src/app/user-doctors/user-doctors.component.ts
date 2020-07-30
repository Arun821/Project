import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from './doctor.model';
import { DoctorService} from '../doctor.service';

@Component({
  selector: 'app-user-doctors',
  templateUrl: './user-doctors.component.html',
  styleUrls: ['./user-doctors.component.css']
})
export class UserDoctorsComponent implements OnInit {

  title: String = "Doctors";
  doctors : DoctorModel[];
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getHospitals().subscribe(data=>{
      this.doctors = JSON.parse(JSON.stringify(data));
    })
  }

  

}
