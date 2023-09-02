const member = require("../MembersSchema");

const DeleteMember =async(req,res)=>{
    const {Name,Email,Dob,Gender,Description,Role,Mobile,Profile}=req.body;

const _id=req.params.id
const Remove=await member.findByIdAndDelete(_id,{Name,Email,Dob,Gender,Description,Role,Mobile,Profile})
res.json({message :"Deleted Succesfully",Remove})
}
module.exports =DeleteMember