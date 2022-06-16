var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", (req, res) => {
    res.render("index", { mensaje: "Hola Javier" });
});

app.listen(8080);
