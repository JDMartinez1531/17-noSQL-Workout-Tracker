const router = require("express").Router();
var db = require("../../models");
const mongoose = require("mongoose");

// get all workouts from the API, route => ('api/workouts')
router.get("/", (req, res) => {
	db.Workout.find({})
		.then((workouts) => res.json(workouts))
		.catch((err) => res.json(err));
});