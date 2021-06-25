const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    description: String,
    dateRelease: Date,
    filmTime: Date,

})