const router = require("express").Router();
var db = require("../../models");
const mongoose = require("mongoose");

// get all workouts from the API
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

// add workout
router.post("/", (req, res) => {
	db.Workout.create(req.body)
		.then((workout) => res.json(workout))
		.catch((err) => res.json(err));
});

// update data with id
router.put("/:id", (req, res) => {
	db.Workout.findOneAndUpdate(
		{ _id: mongoose.Types.ObjectId(req.params.id) },
		{ $push: { exercises: req.body } },
		{ new: true }
	)
		.then((workout) => res.json(workout))
		.catch((err) => res.json(err));
});

const weekRange = () => {
	let week = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
	// at midnight
	week.setHours(0, 0, 0, 0);
	// returning the days
	return week;
};

// workouts in the last 7 days
router.get("/range", (req, res) => {
	db.Workout.find({
		day: { $gte: weekRange() },
	})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});

module.exports = router;
