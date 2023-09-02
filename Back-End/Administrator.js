const JWT = require('jsonwebtoken');
const admin = require('./AdminSchema');
const bcrypt = require('bcrypt');

const CreateAdmin = async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const adminExists = await admin.findOne({ Email });
    if (adminExists) {
      res.json("Admin already exists");
    } else {
      const adminDetails = await admin.create({
        FirstName,
        LastName,
        Email,
        Password: hashedPassword
      });
      res.json({
        FirstName: adminDetails.FirstName,
        LastName: adminDetails.LastName,
        Email: adminDetails.Email,
        Token: tokengenerate(adminDetails._id)
      });
    }
  } catch (error) {
    console.error('Error while creating admin:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const tokengenerate = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

module.exports = {CreateAdmin,tokengenerate}
