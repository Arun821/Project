const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hospital',{ useNewUrlParser: true ,useUnifiedTopology:true});
const Schema = mongoose.Schema;

var Users = new Schema({
    userName : String,
    place : String,
    phone : String,
    email : String,
    password : String
});
var UserData = mongoose.model('user',Users);
module.exports = UserData;