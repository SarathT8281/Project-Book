// const admin = require('../AdminSchema')
// const bcrypt = require('bcrypt');
// const { tokengenerate } = require('../Administrator');

// const toCompareAdmin = async (req,res) => {
//     const { FirstName, LastName, Email, Password } = req.body;

//     const isAdmin = await admin.findOne({Email});
//     if(!isAdmin){
//         res.json('Email and password not exist..')
//     }

//     const isPassword = await bcrypt.compare(Password,isAdmin.Password)
//     if(!isPassword){
//         res.json('Email and password not exist..')
//     }

// }

// const token = tokengenerate(isAdmin._id);
// res.json({
//     FirstName:isAdmin.FirstName,
//     LastName:isAdmin.LastName,
//     Email:isAdmin.Email,
//     Password:isAdmin.Password,
//     token : tokengenerate(isAdmin._id)
// })
// module.exports = toCompareAdmin

const admin = require('../AdminSchema');
const bcrypt = require('bcrypt');
const { tokengenerate } = require('../Administrator');

const toCompareAdmin = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const isAdmin = await admin.findOne({ Email });
        if (!isAdmin) {
            return res.status(401).json({ message: 'Email and password combination not valid.' });
        }

        const isPasswordValid = await bcrypt.compare(Password, isAdmin.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email and password combination not valid.' });
        }

        const token = tokengenerate(isAdmin._id);

        // Do not include the password in the response
        const responsePayload = {
            FirstName: isAdmin.FirstName,
            LastName: isAdmin.LastName,
            Email: isAdmin.Email,
            token: token
        };

        return res.status(200).json(responsePayload);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
};

module.exports = toCompareAdmin;
