const book = require("../BookSchema");

const DeleteBooks =async(req,res)=>{
    const {BookName,Author,PublicationsName,Year,Price, Availability}=req.body;

const _id=req.params.id
const Remove=await book.findByIdAndDelete(_id,{BookName,Author,PublicationsName,Year,Price,Availability})
res.json({message :"Deleted Succesfully",Remove})
}
module.exports =DeleteBooks