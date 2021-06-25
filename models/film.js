const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {reviews, actors} = require("./dataSchema");

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
    },
	actors: [actors],
	reviews: [reviews]

});

module.exports = mongoose.model("Films", movieSchema);
