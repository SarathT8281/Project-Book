const order = require("./OrderSchema")

 const getOrders = async (req,res)=>{
   
    const dataname = req.params.id
    const Name =await order.find()
    
    res.json(Name)
 }

 const getIdePass = async(req,res)=> {
   const getId = req.params.id;
   const get = await order.findById({_id:getId})
   res.json(get)
 }

 module.exports ={getOrders,getIdePass}