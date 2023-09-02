const book = require("./BookSchema");


const CreateBooks = async (req,res)=>{
    const {BookName,Author,PublicationsName,Year,Price, Availability} =req.body;
    const BookDetails = await book.create({
        BookName,Author,PublicationsName,Year,Price,Availability
    }) 
    res.json(BookDetails)

}
module.exports= CreateBooks

