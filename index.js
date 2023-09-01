const express = require('express');

const app = express();

app.use(express.json()); // O backend consiga interpretar o formato JSON

app.get("/", (req, res) => {
    return res.send('Hello world!');
})

app.post("/", (req, res) => {
    //req.headers - configurações e chaves de autorização
    //req.body - conjunto de dados que está sendo fornecido como corpo da requisição
    //req.params - parâmetros estáticos de rota
    //req.query - query params
    console.log(req.headers);
    console.log(req.body);
    return res.status(201).json({ message: 'Created successfully.'});
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})