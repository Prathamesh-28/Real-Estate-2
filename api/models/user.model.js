const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: trusted
    },
    email: {
        type: String,
        required: true,
        unique: trusted
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = mongoose.model('User',userSchema);
export default User;