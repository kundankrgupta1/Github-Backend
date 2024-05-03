const { Schema, model } = require("mongoose");

const productsSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
}, { versionKey: false })

const productsModule = model("products", productsSchema);

module.exports = productsModule;
