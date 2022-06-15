var express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Hola que tal");
});

app.listen(8080);
