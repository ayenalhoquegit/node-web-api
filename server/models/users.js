const mongoose = require('mongoose');
let users = mongoose.model('users',{
	name : {
		type :String,
		required:true,
		trim : true
	},
	email : {
		type : String,
		required:true
	},

	mobile : {
		type : Number
	}
});

module.exports = {
	users
}
