var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var complaintSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    detail:{
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('complaint', complaintSchema);