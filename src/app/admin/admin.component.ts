import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from './doctor.model';
import { DoctorService} from '../doctor.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
title: String = "Doctors";
doctors : DoctorModel[];
  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getHospitals().subscribe(data=>{
      this.doctors = JSON.parse(JSON.stringify(data));
    })
  }

  deleteDoctor(id){
    console.log(id);
    this.doctorService.deleteDoctorData(id);
    console.log("Deleted")
    location.reload();
  }
  updateDoctor(id){
    console.log(id);
    this.router.navigate([`/update/${id}`]);
  }
}
