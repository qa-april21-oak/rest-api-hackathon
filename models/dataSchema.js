const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviews = new Schema({
    name: String,
    author: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    }
})