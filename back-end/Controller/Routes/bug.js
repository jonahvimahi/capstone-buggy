const route = require("express").Router();
const bugModel = require("../../Model/bugModel");

route.post("/createbug", async (req, res) => {
	const newBug = new bugModel({
		name: req.body.name,
		details: req.body.details,
		steps: req.body.steps,
		version: req.body.version,
		assigned: req.body.assigned,
		creator: req.body.creator,
		priority: req.body.priority,
		date: req.body.date,
	});
	try {
		const newBugEntry = await newBug.save();
		res.json(newBugEntry);
	} catch (err) {
		res.json({ message: err });
	}
	// const {name, details, steps, version, assigned, priority, date} = req.body
	// bugModel.create(req.body).then((bug) => {
	//     if(!bug) return res.status(400).send('There was an error.')
	//     res.send('created bug')
	// })
	// .catch((err) => res.status(400).send(err))
});

route.put("/createbug", (req, res) => {
	const { _id, name, details, steps, version, assigned, priority, date } =
		req.body;
	bugModel
		.findByIdAndUpdate(_id)
		.then((bug) => {
			if (!bug) return res.status(400).send("no bug");
			res.send("updated");
		})
		.catch((err) => {
			if (err) res.status(400).send(err);
		});
});

route.post("/createbug", (req, res) => {
	bugModel.findOne(req.body).then((bug) => {
		if (err) res.status(400).send(err);
	});
});

route.get("/", (req, res) => {
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

// route.get('/', async(req, res) => {
//  try {
//      res.send("hello")
    //  res.send({allBugs})
    //  const allBugs = await bugModel.find()
    //  res.json(allBugs)
//  }
//  catch(err) {
//      res.json({message:err})
//  }
// })

module.exports = route;
