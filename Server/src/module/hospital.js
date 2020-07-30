const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hospital',{ useNewUrlParser: true ,useUnifiedTopology:true});
const Schema = mongoose.Schema;

var Hospitals = new Schema({
    regId: String,
    hName: String,
    place: String,
    contact: Number,
    email: String,
    password: String
});
var HospitalData = mongoose.model('hospital', Hospitals);
module.exports = HospitalData;