const mongoose =require('mongoose')

const AdminSchema =mongoose.Schema({
    FirstName :{type : String},
    LastName :{type : String},
    Email :{type : String},
    Password :{type : String}

});
const admin=mongoose.model("admin",AdminSchema)
module.exports=admin