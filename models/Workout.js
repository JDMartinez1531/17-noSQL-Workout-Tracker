const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
	type: {
		type: String,
		trim: true,
		required: "Type is Required",
	},
	name: {
		type: String,
		trim: true,
		required: "Name is Required",
	},
	duration: {
		type: Number,
		required: "Duration is Required",
	},
	weight: Number,
	reps: Number,
	sets: Number,
	distance: Number,
});

const WorkoutSchema = new mongoose.Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [ExerciseSchema],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
