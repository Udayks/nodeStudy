var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1()
    },
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    created_at: Date
   
});

const User = module.exports = mongoose.model('User', UserSchema);

// Get User
module.exports.getUser = (callback, limit) => {
	User.find(callback).limit(limit);
}

// Add User
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}