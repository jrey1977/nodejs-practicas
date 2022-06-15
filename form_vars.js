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
        let params = {};
        let arrayConcidencias = html_string.match(/[^\{\}]+(?=\})/g);
        let nombre = "";
        if (req.url.indexOf("?") > 0) {
            // /?nombre=javi&puesto=siempre
            let url_data = req.url.split("?");
            let arrayParams = url_data[1].split("&");
            // [nombre=javi,puesto=siempre]
        }

        for (let i = arrayParams.length - 1; i >= 0; i--) {
            var param = arrayParams[i];
            // nombre=javi
            var param_dato = param.split("=");
            // [nombre,javi]
            params[param_dato[0]] = [param_dato[1]];
            // {nombre: javi}
        }

        for (let i = arrayConcidencias.length; i >= 0; i--) {
            let valorVariable = eval(arrayConcidencias[i]);
            html_string = html_string.replace(
                "{" + arrayConcidencias[i] + "}",
                valorVariable
            );
        }

        res.writeHead("200", { "Content-type": "text/html" });
        res.write(html_string);
        res.end();
    });
}).listen(8080);
