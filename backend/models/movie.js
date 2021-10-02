var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    summary:{
        type: String,
        required: true
    },
    release_Date:{
        type: Date,
        required: true
    },
    cast:{
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    movieLink:{
        type: String,
        required: true
    },
    trailerLink:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Movie', movieSchema);