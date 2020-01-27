const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({

    _userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    _productId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    checkout: {
        type: Boolean,
        default: false,
    }
})

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart