const order = require("./OrderSchema");

const DeleteOrders =async(req,res)=>{
    const {ProductId,FirstName,LastName,ProductNo,Date}=req.body;

const _id=req.params.id
const Remove=await order.findByIdAndDelete(_id,{  ProductId,FirstName,LastName,ProductNo,Date})
res.json({message :"Deleted Succesfully",Remove})
}
module.exports =DeleteOrders