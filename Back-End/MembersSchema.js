const mongoose =require('mongoose')

const MemberSchema =mongoose.Schema({
    Name :{type : String},
    Email :{type : String},
    Dob :{type : Number},
    Gender :{type : String},
    Description :{type : String},
    Role :{type : String},
    Mobile :{type : Number},
    Profile :{type : String},


});
const member=mongoose.model("member",MemberSchema)
module.exports=member