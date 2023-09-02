const order = require("./OrderSchema");


const CreateOrders = async (req,res)=>{
    const {ProductId,FirstName,LastName,ProductNo,Date} =req.body;
    const OrderDetails = await order.create({
        ProductId,FirstName,LastName,ProductNo,Date
    }) 
    res.json(OrderDetails)

}
module.exports= CreateOrders