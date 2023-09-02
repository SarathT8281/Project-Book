const cart = require("./CartSchema")

const getCart = async (req,res)=>{
   
    const dataname = req.params.id
    const Name =await cart.find()
    
    res.json(Name)
 }

 const getIdssPass = async(req,res)=> {
   const getId = req.params.id;
   const get = await order.findById({_id:getId})
   res.json(get)
 }

 module.exports ={getCart,getIdssPass}