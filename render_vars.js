let http = require("http");
let fs = require("fs");

// Leo archivo síncronamente
// let html = fs.readFileSync("./index.html");

http.createServer((req, res) => {
    // Leo archivo asíncronamente
    fs.readFile("./index.html", (err, html) => {
        let html_string = html.toString();

        // Guarda en una variable el array con las coincidencias del patrón expresado con
        // expresión regular(en este caso, strings que empiezan y acaban con corchetes)
        let arrayConcidencias = html_string.match(/[^\{\}]+(?=\})/g);
        let tiparraco = "Javier Rey";
        let selafolla = "Marta";
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
