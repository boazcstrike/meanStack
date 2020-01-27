const express = require('express')
const app = express()
const mongoose = require('./database/mongoose')

const Product = require('./database/models/product')
const Cart = require('./database/models/cart')
const User = require('./database/models/user')

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


// CRUD

// products
// create
app.post('/products', (req, res) => {
    (new Product({
        'name': req.body.name,
        'description': req.body.description
    }))
    .save()
    .then((product) => res.send(product))
    .catch((err) => console.log(err))
})
//get all
app.get('/products', (req, res) => {
    Product.find({})
        .then(products => res.send(products))
        .catch((err) => console.log(err))
})
//get id
app.get('/products/:productId', (req, res) => {
    Product.find({ _id: req.params.productId })
        .then((product) => res.send(product))
        .catch((err)=> console.log(err))
})
//update id
app.patch('/products/:productId', (req, res) => {
    Product.findOneAndUpdate({ '_id': req.params.productId }, { $set: req.body })
        .then((product) => res.send(product))
        .catch((err) => console.log(err))
})
//delete id
app.get('/products/:productId', (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.productId })
        .then((product) => res.send(product))
        .catch((err) => console.log(err))
})


// users
// create
app.post('/users', (req, res) => {
    (new User({
        'username': req.body.username,
        'password': req.body.password,
        'email': req.body.email,
        'activated': req.body.activated,
    }))
        .save()
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
})
//get all
app.get('/users', (req, res) => {
    User.find({})
        .then(users => res.send(users))
        .catch((err) => console.log(err))
})
//get id
app.get('/users/:userId', (req, res) => {
    User.find({ _id: req.params.userId })
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
})
//update id
app.patch('/users/:userId', (req, res) => {
    User.findOneAndUpdate({ '_id': req.params.userId }, { $set: req.body })
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
})
//delete id
app.get('/users/:userId', (req, res) => {
    User.findByIdAndDelete({ _id: req.params.userId })
        .then((user) => res.send(user))
        .catch((err) => console.log(err))
})


// user cart
// create
app.post('/users/:userId/carts', (req, res) => {
    (new Cart({
        '_userId': req.params.userId,
        '_productId': req.body.productId
    }))
        .save()
        .then((cart) => res.send(cart))
        .catch((err) => console.log(err))
})
//get all
app.get('/users/:userId/carts', (req, res) => {
    Cart.find({ _userId: req.params.userId })
        .then(cart => res.send(cart))
        .catch((err) => console.log(err))
})
//delete id
app.delete('/users/:userId/carts/:cartId', (req, res) => {
    Cart.findByIdAndDelete({ _id: req.params.cartId })
        .then((cart) => res.send(cart))
        .catch((err) => console.log(err))
})


app.listen(3000, () => console.log("Served on port 3000"))