const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minlength: 3,
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        trim: true,
        minlength: 3,
    },
    activated: {
        type: Boolean,
        default: true,
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User