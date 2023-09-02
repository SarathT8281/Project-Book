const mongoose =require('mongoose')

const UserSchema =mongoose.Schema({
    FirstName :{type : String},
    LastName :{type : String},
    Email :{type : String},
    Password :{type : String}

});
const user=mongoose.model("user",UserSchema)
module.exports=user