import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { HomeComponent } from './home/home.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { HospitalRegComponent } from './hospital-reg/hospital-reg.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDoctorsComponent } from './admin-doctors/admin-doctors.component';
import { UserDoctorsComponent } from './user-doctors/user-doctors.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';



const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'', component:MainHomeComponent},
    {path:'login', component:LoginComponent},
    {path:'hospitalLogin', component:HospitalLoginComponent},
    
    {path:'user registration', component:UserRegComponent},
    {path:'hospital registration', component:HospitalRegComponent}
  ]},
  
  {path:'userhome', component:UserhomeComponent,
  children:[
    {path:'', component:UserHomeComponent},
    {path:'userDoctors', component:UserDoctorsComponent},
    {path:'appointment', component:AppointmentComponent}
  ]},
  
  {path:'admin', component:AdminComponent,
  children:[
    {path:'', component:AdminHomeComponent},
    {path:'admin doctors', component:AdminDoctorsComponent},
    {path:'add doctor', component:AddDoctorComponent}

  ]},
  {path:'update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
