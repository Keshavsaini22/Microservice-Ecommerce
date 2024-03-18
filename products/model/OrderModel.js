const mongoose = require('mongoose')

const CommentsSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirm", "reject"],
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("comments", CommentsSchema)