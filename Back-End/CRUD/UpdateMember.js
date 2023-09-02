const member = require("../MembersSchema");

const UpdateMember =async(req,res)=>{
    const {Name,Email,Dob,Gender,Description,Role,Mobile,Profile}=req.body;

const _id=req.params.id
const update=await member.findByIdAndUpdate(_id,{Name,Email,Dob,Gender,Description,Role,Mobile,Profile})
res.json(update)
}
module.exports =UpdateMember