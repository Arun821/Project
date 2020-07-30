import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:4000/users");
  }
  newUser(user){
    console.log(user);
    return this.http.post("http://localhost:4000/insertUser",{"user":user})
    .subscribe(data=>{
      console.log(data);
    })
  }
}
