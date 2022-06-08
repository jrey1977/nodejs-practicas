let http = require("http");

let manejador = function (req, res) {
    console.log("He recibido una petición");
    res.end("Hola mundo");
};

let servidor = http.createServer(manejador);

servidor.listen(8080);
