const mongoose = require('mongoose');
const User = require('./user');

const optionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    voters: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    votes: Number,
})

exports.Option = mongoose.model('Option', optionSchema);