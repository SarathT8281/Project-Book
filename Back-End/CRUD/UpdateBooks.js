const book = require("../BookSchema");

const UpdateBooks =async(req,res)=>{
    const {BookName,Author,PublicationsName,Year,Price, Availability}=req.body;

const _id=req.params.id
const Change=await book.findByIdAndUpdate(_id,{BookName,Author,PublicationsName,Year,Price,Availability})
res.json(Change)
}
module.exports =UpdateBooks