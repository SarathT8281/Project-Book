const mongoose =require('mongoose')

const BookSchema =mongoose.Schema({
    ProductId :{type : String},
    FirstName :{type : String},
    LastName :{type : String},
    ProductNo :{type : Number},
    Date :{type : Number}

});
const order=mongoose.model("order",BookSchema)
module.exports=order
