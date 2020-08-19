const router = require("express").Router();
var db = require("../../models");
const mongoose = require("mongoose");

// get all workouts from the API
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

router.post("/", (req, res) => {
	db.Workout.create(req.body)
		.then((workout) => res.json(workout))
		.catch((err) => res.json(err));
});

router.put("/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: mongoose.Types.ObjectId(req.params.id) },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((workout) => res.json(workout))
		.catch((err) => res.json(err));
});

module.exports = router;