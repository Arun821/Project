import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from './doctor.model';
import { DoctorService} from '../doctor.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

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
  