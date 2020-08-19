const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./controllers");
// connect to Json and Connect PORT and connected Public folder to app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
const PORT = process.env.PORT || 3000;



// Add routes
app.use(routes);

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/exercise", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", function (req, res) {
	res.sendFile(path.join(__dirname, "./public/stats.html"));
});


app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
