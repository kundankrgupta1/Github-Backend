const express = require("express");
const DBConnection = require("./src/config/db");
const userRoutes = require("./src/routes/users.route");
const productsRoutes = require("./src/routes/products.route");
const app = express();
app.use(express.json());

// PORT Number
const PORT = 8080;

app.get("/", (req, res) => {
	res.send("Welcome to Home Page");
})

// users routes
app.use("/users", userRoutes)

// products routes
app.use("/products", productsRoutes)

// server running on port
app.listen(PORT, () => {
	try {
		DBConnection();
		console.log("MongoDB Connected Successfully");
		console.log(`server is running on port ${8080}`);
	} catch (error) {
		console.log(error);
	}
})
