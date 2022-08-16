const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name : {type : String , required : true},
  email : {type : String , required : true , unique : true},
  password : {type : String , required : true},
  avatar : {type : String , required : true},
  isAdmin : {type : Boolean , required : true},
  created : {type : Date , default : Date.now()},
});
let User = mongoose.model('user' , userSchema);
module.exports = User;
