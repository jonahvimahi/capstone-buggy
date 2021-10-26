require("dotenv").config();
const route = require("express").Router();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const morgan = require('morgan')

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
app.use(morgan('tiny'))

app.use("/create", require("./Controller/Routes/createBug"));

route.get("/viewbugs", (req, res) => {
	bugModel
		.find(req.body)
		.then((bug) => {
			if (!bug) return res.status(400).send("no bugs");
			res.send(bug);
		})
		.catch((err) => {
			if (err) res.status(400).send(err);
		});
	});