import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserhomeComponent,
    HomeComponent,
    UserRegComponent,
    HospitalRegComponent,
    AddDoctorComponent,
    AdminComponent,
    UpdateComponent,
    MainHomeComponent,
    AdminHomeComponent,
    AdminDoctorsComponent,
    UserDoctorsComponent,
    UserHomeComponent,
    AppointmentComponent,
    HospitalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
