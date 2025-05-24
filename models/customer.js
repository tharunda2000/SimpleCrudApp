const mongoose = require('mongoose')

const customerSchema =new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    member: {
        type: Boolean,
        required: true,
        default:false,
    },
})

module.exports = mongoose.model('Customer',customerSchema)