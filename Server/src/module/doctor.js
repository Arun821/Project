const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hospital',{ useNewUrlParser: true ,useUnifiedTopology:true});
const Schema = mongoose.Schema;

var NewDoctor = new Schema({
    doctorId :String,
    name : String,
    designation : String,
    specialisation : String,
    phone : Number,
    email : String,
    imageUrl : String
});
var DoctorData = mongoose.model('doctor',NewDoctor);
module.exports = DoctorData;