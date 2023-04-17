const mongoose = require('mongoose');
const User = require('./user');
const Option = require('./option');

const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option', required: true }],

    },
    owner_info: {
        type: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    }
})

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;