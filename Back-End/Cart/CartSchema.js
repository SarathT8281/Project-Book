
const mongoose =require('mongoose')

const schemaCart=mongoose.Schema({
    Product :{type : String},
    Price :{ type : Number},
    Quantity :{type : Number},
    Total :{type : Number}
})
const cart=mongoose.model('cart',schemaCart)
module.exports=cart



