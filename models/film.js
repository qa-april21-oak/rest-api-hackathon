const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Creation of the Validation of the Schema
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

module.exports = films
