const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uuid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["User", "Admin", "Vendor"]
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    },
    tempStatus: {
        type: String,
        enum: ['PENDING', 'SUCCESS']
    },
}, { timestamps: true })
module.exports = mongoose.model("users", UserSchema)