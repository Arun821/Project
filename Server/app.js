const express = require('express');
const cors = require('cors');
var bodyparser = require('body-parser');
const DoctorData = require('./src/module/doctor');
const HospitalData = require('./src/module/hospital');
const UserData = require('./src/module/user');
const AppointmentDate = require('./src/module/appointment');

var app = new express();

app.use(cors());
app.use(bodyparser.json());

app.get('/admin',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    DoctorData.find()
    .then(doctor=>{
        res.send(doctor);
        //console.log(doctor);
    })
});

app.post('/add',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var doctor = {
        doctorId : req.body.doctor.doctorId,
        name : req.body.doctor.name,
        designation : req.body.doctor.designation,
        specialisation : req.body.doctor.specialisation,
        phone : req.body.doctor.phone,
        email : req.body.doctor.email,
        imageUrl : req.body.doctor.imageUrl
    }
    var doctor = new DoctorData(doctor);
    doctor.save();
});

app.post('/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    console.log(req.body);
    var id = req.body.id;
    console.log("Doctor id is"+""+id);
    DoctorData.deleteOne({_id : id})
    .then(doctors=>{
        console.log(doctors);
        res.send(doctors);
    });
});

app.get('/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log("Doctor id"+" "+id);
    DoctorData.findOne({_id : id})
    .then(doctors=>{
        console.log(doctors);
        res.send(doctors);
    });
});

app.put('/update/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log("Id to be edited is "+ " "+id);
    //console.log(req.body);
    var doctor = {
        doctorId : req.body.doctorId,
        name : req.body.name,
        designation : req.body.designation,
        specialisation : req.body.specialisation,
        phone : req.body.phone,
        email : req.body.email,
        imageUrl : req.body.imageUrl
    }
    //console.log(doctor);
    DoctorData.findOneAndUpdate({_id : id},{'$set' : {doctorId : doctor.doctorId, name : doctor.name, designation : doctor.designation, 
    specialisation : doctor.specialisation, phone : doctor.phone, email : doctor.email, imageUrl : doctor.imageUrl}})
    .then(item=>{
        //console.log(item);
        item.save();
        console.log("Update success");
    });
});


app.get('/users',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    DoctorData.find()
    .then(hospital=>{
        res.send(hospital);
    })
});
app.post('/insert',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    var hospitals = {
        regId: req.body.hospitals.regId,
        hName: req.body.hospitals.hName,
        place: req.body.hospitals.place,
        contact: req.body.hospitals.contact,
        email: req.body.hospitals.email,
        password: req.body.hospitals.password
    }
    var hospital = new HospitalData(hospitals);
    hospital.save();
});

app.post('/insertUser',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    var user = {
        userName : req.body.user.userName,
        place : req.body.user.place,
        phone : req.body.user.phone,
        email : req.body.user.email,
        password : req.body.user.password
    }
    var users = new UserData(user);
    users.save();
});

app.get('/patient',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    const id = req.params.id;
    console.log(id);
    AppointmentDate.findOne({_id:id})
    .then(patient=>{
        console.log(patient);
        res.send(patient);
    });
});

app.post('/appointment',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTION');
    now = new Date();
    if(!this.created_at){
        this.created_at = now;
        console.log(now);
    }
    var op = {
        name : req.body.name,
        age : req.body.age,
        date : now,
        Count : 0
    }
    console.log(op);
    var patients = new AppointmentDate(op);
    console.log(patients);
    patients.save();
    
});
app.listen(4000,function(){
    console.log("Port running Good");
});