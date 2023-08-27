var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	username: String,
	password: String
});

module.exports = mongoose.model('users', userSchema);