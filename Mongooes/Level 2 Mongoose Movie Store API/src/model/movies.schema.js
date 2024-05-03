const { Schema, model } = require('mongoose')

const moviesSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	language: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	rating: {
		type: String,
		required: true
	}
}, { versionKey: false })

const moviesModel = model("movies", moviesSchema);

module.exports = moviesModel;