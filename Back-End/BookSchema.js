const mongoose =require('mongoose')

const BookSchema =mongoose.Schema({
    BookName :{type : String},
    Author :{type : String},
    PublicationsName :{type : String},
    Year :{type : Number},
    Price :{type : Number},
    Availability :{type : String},

});
const book=mongoose.model("book",BookSchema)
module.exports=book


