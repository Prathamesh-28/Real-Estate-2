const User = require("../models/user.model.js");
const bcryptjs = require('bcryptjs')

const signup = async(req,res) => {
    const { userName, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({userName, email, password: hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('user created successfully!');
    }
    catch (error){
        res.status(500).json(error.message);
    }
    
};
module.exports = {
    signup
};