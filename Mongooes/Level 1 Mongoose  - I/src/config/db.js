// connection to the database
const { connect } = require("mongoose");
const DBConnection = async () => {
	await connect("mongodb://127.0.0.1:27017/");
}
module.exports = DBConnection;