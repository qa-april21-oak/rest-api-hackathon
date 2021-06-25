const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation of the film schema
const movieSchema = new Schema({
    title: String,
    description: String,
    dateRelease: Date,
});

// Validation of the Schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2
    },
    description: {
        type: String,
        required: true,
        minlength: 2
    },
    dateRelease: {
        type: Date,
        required: true,
        min: 1940 - 01 - 01,
        max: 2022 - 01 - 01
    }
});

