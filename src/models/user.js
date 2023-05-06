const mongoose = require('mongoose')
const Polls = require('./poll')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }],
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
