let http = require("http");
let fs = require("fs");
const archivo_parse = require("./params_parser");
const archivo_render = require("./render_view");

let functionParse = archivo_parse.parse;
let functionRender = archivo_render.render;

// Leo archivo síncronamente
// let html = fs.readFileSync("./index.html");

http.createServer((req, res) => {
    if (req.url.indexOf("favicon") > 0) {
        return;
    }

    fs.readFile("./form.html", (err, html) => {
        let html_string = html.toString();
        let arrayConcidencias = html_string.match(/[^\{\}]+(?=\})/g);
        let objetoParams = functionParse(req);
        let html_string_modificado = functionRender(
            html_string,
            arrayConcidencias,
            objetoParams
        );

        res.writeHead("200", { "Content-type": "text/html" });
        res.write(html_string_modificado);
        res.end();
    });
}).listen(8080);
