var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	username: { type: String, unique: true },
	password: String,
	salt: String,
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', userSchema);