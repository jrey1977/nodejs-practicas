function parse(req) {
    let arrayParams = [];
    let objetoParams = {};
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

    return objetoParams;
}

module.exports.parse = parse;
