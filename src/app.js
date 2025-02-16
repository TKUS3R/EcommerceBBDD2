const express = require('express');
const connectMongo = require('./config/mongo');
const { connectNeo4j } = require('./config/neo4j');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
const userRoutes = require("./routes/users.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require("./routes/orders.routes");
const invoiceRoutes = require("./routes/invoice.routes");  // 📌 Nueva ruta para facturas
const productRoutes = require("./routes/product.routes");  // 📌 Nueva ruta para productos

app.use("/app/users", userRoutes);
app.use("/app/orders", orderRoutes);
app.use("/app/invoices", invoiceRoutes);
app.use("/app/products", productRoutes);
app.use("/app/cart", cartRoutes);


// Conectar bases de datos
//connectMongo();
//connectNeo4j();

module.exports = app;
