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

const actors = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1
    },
    surname: {
        type: String,
        required: true,
        minlength: 1
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other", null]
    },
    dateOfBirth: Date,
    movies: [{
        type: String
    }]
})
