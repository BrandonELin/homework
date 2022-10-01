// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const meatSchema = new Schema({
    name: { type: String, required: true }, 
    type: { type: String, required: true }, 
})

// create a Model from our Schema
const Meat = mongoose.model('Meat', meatSchema)

// export our Model
module.exports = Meat;