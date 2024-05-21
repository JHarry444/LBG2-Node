const express = require("express"); // importing the express func

const app = express(); // calls the express func and creates an app

const bodyParser = require("body-parser");

const trainers = [
    {
        name: "JH",
        age: 30,
        job: "Trainer"
    }
];
// array acting as a stand-in for a database here

app.use(bodyParser.json()); // allows the express app to read JSON data from request bodies


app.get("/hello", (request, response) => {
    return response.send("Hello, World!");
});

app.post("/trainer/create", (req, res) => {
    const newTrainer = req.body; // unnecessary but aids in readability

    trainers.push(newTrainer); // adds new trainer to the array

    return res.json(trainers[trainers.length - 1]); // returns the newest trainer from the array
})

app.get("/trainer/get", (req, res) => {
    return res.json(trainers); // returns whole array
});

app.get("/trainer/get/:index", (req, res) => { // finds a trainer at a specific index
    const index = req.params.index; // gets the index from the end of the url

    return res.json(trainers[index]); // returns the trainer at that index
});

app.put("/trainer/replace/:index", (req, res) => {
    const index = req.params.index; // gets the index from the end of the url
    const newTrainer = req.body; // unnecessary but aids in readability

    trainers.splice(index, 1, newTrainer); // removes old trainer and add a new trainer in its place

    return res.json(trainers[index]);
});


app.delete("/trainer/delete/:index", (req, res) => {  // removes a trainer at a specific index
    const index = req.params.index; // gets the index from the end of the url

    // removes trainer at that index (returns an array so the [0] just pulls out the trainer by itself)
    const removed = trainers.splice(index, 1)[0];

    return res.json(removed); // returns the removed trainer (makes it easier to check the request has worked)
});

app.listen(4494, () => console.log("App started"));
