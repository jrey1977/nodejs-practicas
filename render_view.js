function render(html_string, arrayConcidencias, objetoParams) {
    for (let i = arrayConcidencias.length; i >= 0; i--) {
        let valorVariable = arrayConcidencias[i];
        html_string = html_string.replace(
            "{" + valorVariable + "}",
            objetoParams[valorVariable]
        );
    }

    return html_string;
}

module.exports.render = render;
