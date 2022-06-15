let http = require("http");
let fs = require("fs");

// Leo archivo síncronamente
// let html = fs.readFileSync("./index.html");

http.createServer((req, res) => {
    if (req.url.indexOf("favicon") > 0) {
        return;
    }

    fs.readFile("./form.html", (err, html) => {
        let html_string = html.toString();
        let arrayParams = [];
        let objetoParams = {};
        let arrayConcidencias = html_string.match(/[^\{\}]+(?=\})/g);
        console.log("arrayConcidencias es", arrayConcidencias);
        let nombre = "";
        if (req.url.indexOf("?") > 0) {
            // /?nombre=javi&puesto=siempre
            let url_data = req.url.split("?");
            arrayParams = url_data[1].split("&");
            // [nombre=javi,puesto=siempre]
        }

        for (let i = arrayParams.length - 1; i >= 0; i--) {
            var param = arrayParams[i];
            console.log("param es", param);
            // nombre=javi
            var param_dato = param.split("=");
            // [nombre,javi]
            objetoParams[param_dato[0]] = param_dato[1];
            // {nombre: javi}
        }

        for (let i = arrayConcidencias.length; i >= 0; i--) {
            let valorVariable = arrayConcidencias[i];
            console.log(
                valorVariable + " se reemplaza con ",
                +objetoParams[valorVariable]
            );
            html_string = html_string.replace(
                "{" + valorVariable + "}",
                objetoParams[valorVariable]
            );
        }

        res.writeHead("200", { "Content-type": "text/html" });
        res.write(html_string);
        res.end();
    });
}).listen(8080);
