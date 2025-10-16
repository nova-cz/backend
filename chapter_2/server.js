//$ la direccion del server conectado es:
// url = http://localhost:8383
// ip = 127.0.0.1:8383

//?Crear un server con Express y js
const express = require("express");
//Lo que hace ese codigo es que requerimos informacion de express 
const app = express(); //creamos una aplicacion de express
const PORT = 8383;

// ENDPOINT = HTTP Verbs & Routes (or Paths)
// El método HTTP indica el tipo o propósito de la petición (por ejemplo: GET, POST, PUT , DELETE).
// La ruta o path es el subdirectorio o dirección específica del servidor a la que se envía la petición(request).
// En conjunto, el método y la ruta nos permiten dirigir la solicitud al código correspondiente que manejará la respuesta adecuada. 
// Estas combinaciones (método + ruta) se conocen como "endpoints".

app.get("/", (req, res) => {
    console.log("Yeah I hit and endpoint!", req.method)
    res.sendStatus(200);
});

app.get("/dashboard",(re,res) => {
    console.log("Ohh now I hit the /dashboard endpoint!")
    res.send('hi')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//!Con las pasadas 4 lineas acabamos de crear un server con express
