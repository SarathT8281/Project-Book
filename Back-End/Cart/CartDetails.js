const cart = require('./CartSchema');

const CreateCart = async(req,res)=>{
    console.log("product detials",req.body);
    const {Product,Price,Quantity,Total}=req.body;
    const cartDetails=await cart.create({
        Product,Price,Quantity,Total
    })
    res.json(cartDetails)
}
module.exports=CreateCart



