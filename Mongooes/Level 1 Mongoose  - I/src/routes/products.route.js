const express = require("express");
const productsModule = require("../models/products.schema");

const productsRoutes = express.Router();

productsRoutes.get("/", async (req, res) => {
	try {
		const products = await productsModule.find();
		res.send(products);
	} catch (error) {
		console.log(error);
	}
})

// product post
productsRoutes.post("/", async (req, res) => {
	const { name, brand, price } = req.body;
	try {
		const product = await productsModule.create({ name, brand, price });
		await product.save();
		res.status(201).send('Product added successfully!');
	} catch (error) {
		console.log(error);
	}
})

// product patch
productsRoutes.patch("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, brand, price } = req.body;
	try {
		const product = await productsModule.findByIdAndUpdate(id, { name, brand, price })
		await product.save();
		res.status(201).send("Product updated successfully!")
	} catch (error) {
		console.log(error);
	}
})

// product delete
productsRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const product = await productsModule.findByIdAndDelete(id);
		res.status(201).send("Product deleted successfully!")
	} catch (error) {
		console.log(error);
	}
})


module.exports = productsRoutes;