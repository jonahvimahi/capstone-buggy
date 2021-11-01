require("dotenv").config();
// const route = require("express").Router();
const bugModel = require("./Model/bugModel");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");

mongoose.connect(process.env.DB_URL, {}, (err) => {
	if (!err) return console.log("connected to DB");
	console.log(err);
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
	console.log("we are up on port " + PORT);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/create", require("./Controller/Routes/createBug"));

app.get("/viewbugs", (req, res) => {
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

app.put("/viewbugs", (req, res) => {
	const id = req.query.id;
	console.log(req.body);
	const updateBug = {
			name: req.body.name,
			details: req.body.details,
			steps: req.body.steps,
			version: req.body.version,
			priority: req.body.priority,
			assigned: req.body.assigned,
			creator: req.body.creator,
			date: req.body.date,
	}
	bugModel
		.findByIdAndUpdate(id, updateBug)
		.then((bugModel) => {
			if (!bugModel) return res.status(400).send("no bug");
			res.send(updateBug);
		})
		.catch((err) => {
			if (err) res.status(400).send(err);
		});
});
app.delete(`/viewbugs/delete`, (req, res) => {
	const id = req.query.id;
	bugModel
		.findByIdAndDelete(id)
		.then(
			res.status(202).json({
				message: "data has been deleted",
			})
		)
		.catch(res.status(400));
});
