let http = require("http");
let fs = require("fs");

// Leo archivo síncronamente
// let html = fs.readFileSync("./index.html");

http.createServer((req, res) => {
    // Leo archivo asíncronamente
    let html2 = fs.readFile("./index.json", (err, html) => {
        res.writeHead("200", { "Content-type": "application/json" });
        res.write(html);
        res.end();
    });
}).listen(8080);
