import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  constructor(private http:HttpClient) { }
  
  getPatients(){
    return this.http.get("http://localhost:4000/appointments")
  }

  newAppointment(patients){
    console.log(patients)
    return this.http.post("http://localhost:4000/appointment",{"patients":patients})
    .subscribe(patients=>{
      alert("Booked");
      console.log(patients);
    })
  }
}
