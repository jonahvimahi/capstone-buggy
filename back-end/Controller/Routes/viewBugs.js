const route = require("express").Router();
const bugModel = require("../../Model/bugModel");

route.get("/", (req, res) => {
	bugModel
		.then((bug) => {
			if (!bug) return res.status(400).send("no bugs");
			res.send(bug);
		})
		.catch((err) => {
			if (err) res.status(404).send(err);
		});
	});