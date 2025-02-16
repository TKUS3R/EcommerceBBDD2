const app = require('./app');

const PORT = process.env.PORT || 3000;

require("dotenv").config();


app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

/*
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado");
}).catch(err => console.log("Error en la conexión:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
*/

/*import dotenv from 'dotenv';
dotenv.config();

console.log("MongoDB URI:", process.env.MONGO_URI);
console.log("Redis Host:", process.env.REDIS_HOST);
console.log("Neo4j URI:", process.env.NEO4J_URI);*/