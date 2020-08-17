const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
// connect to Json and Connect PORT and connected Public folder to app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/api/workouts", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    return res;
});

app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});