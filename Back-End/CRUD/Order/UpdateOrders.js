const order = require("./OrderSchema");

const UpdateOrders =async(req,res)=>{
    const { ProductId,FirstName,LastName,ProductNo,Date}=req.body;

const _id=req.params.id
const Change=await order.findByIdAndUpdate(_id,{ ProductId,FirstName,LastName,ProductNo,Date})
res.json(Change)
}
module.exports =UpdateOrders