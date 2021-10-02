var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
    name: {
        type: String,
        default: ''
    },
    age: { type: Number, required: true },
    avatar: { type: String, required: true, trim: true, minlength: 6 },
    email: { type: String, required: true, unique: true, trim: true, minlength: 6 },

    admin: {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);