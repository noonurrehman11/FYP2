var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var movieRequestSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    details:{
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
    userName:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('movieRequest', movieRequestSchema);