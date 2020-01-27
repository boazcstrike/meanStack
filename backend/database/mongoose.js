const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/mean_stack')
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err))

module.exports = mongoose;