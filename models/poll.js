const mongoose = require('mongoose');
const User = require('./user');
const Option = require('./option');

const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: [
        {
            content: {
                type: String,
                required: true
            },
            voters: {
                type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
            },
            votes: Number
        }
    ],
    owner_info: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;