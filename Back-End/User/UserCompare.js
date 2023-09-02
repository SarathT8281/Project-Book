
const bcrypt = require('bcrypt');
const user = require('./UserSchema');
const { tokengenerate } = require('./User');

const toCompareUser = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const isUser = await user.findOne({ Email });
        if (!isUser) {
            return res.status(401).json({ message: 'Email and password combination not valid.' });
        }

        const isPasswordValid = await bcrypt.compare(Password, isUser.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Email and password combination not valid.' });
        }

        const token = tokengenerate(isUser._id);

        // Do not include the password in the response
        const responsePayload = {
            FirstName: isUser.FirstName,
            LastName: isUser.LastName,
            Email: isUser.Email,
            token: token
        };

        return res.status(200).json(responsePayload);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
};

module.exports = toCompareUser;
