const express = require("express");
const userModule = require("../models/user.schema");

const userRoutes = express.Router();


// users routes
userRoutes.get("/", async (req, res) => {
	try {
		const users = await userModule.find();
		res.send(users);
	} catch (error) {
		console.log(error);
	}
})

// user post
userRoutes.post("/", async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const findExisting = await userModule.findOne({ email });
		if (findExisting) {
			res.status(400).send('User already exists');
		}
		const user = await userModule.create({ name, email, password });
		await user.save();
		res.status(201).send('User created successfully!');
	} catch (error) {
		console.log(error);
	}
})

// user patch
userRoutes.patch("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, email, password } = req.body;
	try {
		const user = await userModule.findByIdAndUpdate(id, { name, email, password })
		await user.save();
		res.status(201).send("User updated successfully!")
	} catch (error) {
		console.log(error);
	}
})

// user delete
userRoutes.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const findExistingDelete = await userModule.findById(id);
		if(!findExistingDelete){
			res.status(400).send("User not found!")
		}
		const user = await userModule.findByIdAndDelete(id)
		res.status(201).send("User deleted successfully!")
	} catch (error) {
		console.log(error);
	}
})

module.exports = userRoutes;