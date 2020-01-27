const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
    },
    description: {
        type: String,
        trim: true,
        minlength: 3,
    }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product