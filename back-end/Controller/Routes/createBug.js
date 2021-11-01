const route = require("express").Router();
const bugModel = require("../../Model/bugModel");

route.post("/", async (req, res) => {
	const newBugModel = new bugModel({
		name: req.body.name,
		details: req.body.details,
		steps: req.body.steps,
		version: req.body.version,
		priority: req.body.priority,
		assigned: req.body.assigned,
		creator: req.body.creator,
		date: req.body.date,
	});
	newBugModel.save(() => {
		try {
			console.log(req.body);
			res.status(200).json({
				message: "Data has been saved",
			});
		} catch {
			res.status(500).json({ message: "There was an internal server error" });
		}
	});
});

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
	// 	res.status(200).send('nice')
		});

module.exports = route;
