const mongoose = require('mongoose');
mongoose.connect('mongodb//localhost:27017/Hospital',{ useNewUrlParser: true ,useUnifiedTopology:true });

const Schema = mongoose.Schema;

var Appointment = new Schema({
    name : String,
    age : Number,
    created_at : {type : Date, default : Date.now()},
    count : Number
   
    
});
var AppointmentDate = mongoose.model('appointment',Appointment);
module.exports = AppointmentDate;