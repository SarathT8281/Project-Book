const cart = require("./CartSchema");

const DeleteCart =async(req,res)=>{
    const {Product,Price,Quantity,Total}=req.body;

const _id=req.params.id
const Remove=await cart.findByIdAndDelete(_id,{Product,Price,Quantity,Total})
res.json({message :"Deleted Succesfully",Remove})
}
module.exports =DeleteCart