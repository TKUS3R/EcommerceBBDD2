const express = require('express');
const connectMongo = require('./config/mongo');
const { connectNeo4j } = require('./config/neo4j');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/cart', require('./routes/cart.routes'));
app.use('/api/orders', require('./routes/orders.routes'));

// Conectar bases de datos
//connectMongo();
//connectNeo4j();

module.exports = app;
