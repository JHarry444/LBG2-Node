const express = require("express"); // importing the express func
 
const app = express(); // calls the express func and creates an app

app.get("/hello", (request, response) => {
    response.send("Hello, World!"); 
})

app.listen(4494, () => console.log("App started"));
