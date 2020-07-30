import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorModel } from './admin/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  getHospitals(){
    return this.http.get("http://localhost:4000/admin");
  }
  newDoctor(doctor){
    console.log(doctor)
    return this.http.post("http://localhost:4000/add",{"doctor":doctor})
    .subscribe(data=>{
      console.log("Insert");
      console.log(data)});
      
  }
  deleteDoctorData(id){
    console.log(id);
    return this.http.post("http://localhost:4000/delete",{"id" : id})
    .subscribe(data=>{
      alert("deleted");
      console.log(data);})
  }

  putDoctor(doctor: DoctorModel){
    return this.http.put("http://localhost:4000/doctor"+`/${doctor.doctorId}`,doctor)
    .subscribe(data=>{console.log(data)})
  }
  editDoctor(_id){
    return this.http.get<any>("http://localhost:4000"+`/${_id}`);
  }
  updateDoctor(id,doctor){
    console.log(id,doctor);
    return this.http.put<any>("http://localhost:4000/update"+`/${id}`,doctor)
    .subscribe(data=>{console.log(data)})
  }
}
