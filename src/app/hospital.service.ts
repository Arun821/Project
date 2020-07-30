import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http:HttpClient) { }
  getHospital(){
    return this.http.get("http://localhost:4000/hospitals");
  }
  newHospital(hospital){
    console.log(hospital)
    return this.http.post("http://localhost:4000/insert",{"hospitals": hospital})
    .subscribe(data=>{console.log(data)});
  }
}
