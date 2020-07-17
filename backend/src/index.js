const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-apskq.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(4343);

//yarn dev
// yarn add socket.io

//metodos HTTP: get, post, put, delete
// Tipos de parêmetros:

//Query Params: request.query (Filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//body: request.body ( Daos para a criação ou alteração de um registro)

//mongoDB (Não-relacional)