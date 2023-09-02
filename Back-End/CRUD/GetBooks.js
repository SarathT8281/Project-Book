const book = require("../BookSchema")

 const getBooks = async (req,res)=>{
   
    const dataname = req.params.id
    const Name =await book.find()
    
    res.json(Name)
 }

 const getIdPass = async(req,res)=> {
   const getId = req.params.id;
   const get = await book.findById({_id:getId})
   res.json(get)
 
 }


 

 module.exports ={getBooks,getIdPass}