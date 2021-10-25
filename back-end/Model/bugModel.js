const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    details: String,
    steps: String,
    version: String,
    assigned: String,
    creator: String,
    priority: Number,
    date: String,
})

const bugModel = mongoose.model('Bug', schema)

module.exports = bugModel