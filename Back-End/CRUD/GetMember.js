const member = require("../MembersSchema")


 const getmember = async (req,res)=>{
   
    const dataname = req.params.id
    const Name =await member.find()
    
    res.json(Name)
 }

 const getIdsPass = async(req,res)=> {
   const getId = req.params.id;
   const get = await member.findById({_id:getId})
   res.json(get)
 }

 module.exports ={getmember,getIdsPass}