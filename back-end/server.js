require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DB_URL, {}, (err) => {
	if (!err) return console.log("connected to DB");
	console.log(err);
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
	console.log("we are up on port " + PORT);
});
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

app.use("/create", require("./Controller/Routes/bug"));

