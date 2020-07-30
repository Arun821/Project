import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { DoctorModel } from '../admin/doctor.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title : String = "Update Doctor";
  id = '';
  doctorList = <any>('');
  doctor = new DoctorModel(null, null, null, null, null, null, null);

  constructor(private doctorService : DoctorService, private router : Router,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.doctorService.editDoctor(this.id).subscribe(data=>{
      this.doctor = JSON.parse(JSON.stringify(data))
      console.log("Placed");
    });
  }
  UpdateDoctor(){
    console.log(this.doctor);
    console.log(this.id);
    this.doctorService.updateDoctor(this.id, this.doctor);
    console.log("Done");
    alert("Success");
    this.router.navigate(['/admin']);
  }

}
