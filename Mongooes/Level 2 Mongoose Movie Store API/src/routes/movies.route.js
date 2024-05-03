const express = require('express');
const moviesModel = require('../model/movies.schema');

const movieRouter = express.Router()

movieRouter.get("/", async (req, res) => {
	try {
		const movies = await moviesModel.find();
		res.send(movies);
	} catch (error) {
		console.log(error)
	}
})

movieRouter.post("/", async (req, res) => {
	const { name, language, genre, rating } = req.body;
	try {
		const movies = await moviesModel.create({ name, language, genre, rating });
		await movies.save();
		res.status(201).send("Movie added successfully!")
	} catch (error) {
		console.log(error);
		res.send(error)
	}
})

movieRouter.patch("/:id", async (req, res) => {
	const { id } = req.params;
	const { name, language, genre, rating } = req.body;
	try {
		const movie = await moviesModel.findByIdAndUpdate(id, { name, language, genre, rating })
		await movie.save();
		res.status(201).send("Movie updated successfully!");
	} catch (error) {
		console.log(error);
	}
})

movieRouter.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const movie = await moviesModel.findByIdAndDelete(id);
		res.status(201).send("Movie deleted successfully!")
	} catch (error) {
		console.log(error)
	}
})

module.exports = movieRouter;
