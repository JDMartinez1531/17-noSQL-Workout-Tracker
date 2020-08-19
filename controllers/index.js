const router = require("express").Router();
const workouts = require("./api/workout");

router.use("/api/workouts", workouts);

module.exports = router;