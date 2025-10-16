//$ la direccion del server conectado es:
// url = http://localhost:8383
// ip = 127.0.0.1:8383

//?Crear un server con Express y js
const express = require("express");
//Lo que hace ese codigo es que requerimos informacion de express 
const app = express(); //creamos una aplicacion de express
const PORT = 8383;

let data = {
    users: ['James']
}

//Middleware
//El middleware es una funcion que se ejecuta antes de que se ejecute el callback
app.use(express.json())


// ENDPOINT = HTTP Verbs & Routes (or Paths)
// El método HTTP indica el tipo o propósito de la petición (por ejemplo: GET, POST, PUT , DELETE).
// La ruta o path es el subdirectorio o dirección específica del servidor a la que se envía la petición(request).
// En conjunto, el método y la ruta nos permiten dirigir la solicitud al código correspondiente que manejará la respuesta adecuada. 
// Estas combinaciones (método + ruta) se conocen como "endpoints".

app.get("/", (req, res) => {
    res.send(`<body style="background:pink;color:blue;">
        <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>`)
});

app.get("/dashboard",(re,res) => {
    res.send(`<body>
        <h1>Dashboard</h1>
        <a href="/">Back to home</a>
        </body>`)
})
//? website endpoints (these endpoints son para enviar html como respuesta y tipicamente se usan cuando un usuario entra a un URL en el navegador

// * API Endpoints
// Type 2 - Non-visual routes (API endpoints)
//
// Este tipo de endpoint no devuelve una página visual, sino datos (generalmente en formato JSON).

//CRUD-method - create-post read-get update-put delete-delete


// Cuando el cliente hace una petición GET a '/api/data', el servidor ejecuta el callback
// y responde enviando los datos (en este caso, la variable 'data').
app.get('/api/data', (req,res) => {
    console.log('This one was for API data')
    res.send(data)
}) 

//Vamos a mandar informacion
app.post('/api/data', (req,res) => {
    //Someone wnats to create a user (for example when they click a sign up button)
    //the user clicks the sign up button affter entering their credentials, and their 
    //browser is wired up to send out a network request to theserver to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.users.push(newEntry.name)
    res.sendStatus(201)
})

//Lo podemos eliminar
app.delete('/api/data', (req,res) => {
    data.users.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(204)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//!Con las pasadas 4 lineas acabamos de crear un server con express
