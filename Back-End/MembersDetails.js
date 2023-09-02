const member = require("./MembersSchema");

const CreateMember = async (req,res)=>{
    const { Name,Email,Dob,Gender,Description,Role,Mobile,Profile} =req.body;
    const MemberDetails = await member.create({
        Name,Email,Dob,Gender,Description,Role,Mobile,Profile

    }) 
    res.json(MemberDetails)
}
module.exports= CreateMember