const express = require('express');
const connectionDB = require('./src/config/db');
const movieRouter = require('./src/routes/movies.route');
const app = express();
app.use(express.json())
const PORT = 8080;

app.get("/", (req, res) => {
	res.send("Welcome to the MoviesDB Home Page")
})

app.use("/movies", movieRouter)

app.listen(PORT, () => {
	try {
		connectionDB();
		console.log(connectionDB);
		console.log("Database connected successfully");
		console.log(`server is running on ${PORT}`);
	} catch (error) {
		console.log(error)
	}
})