/*require("dotenv").config();
const express = require("express");
const path = require("path");
const { connectRedis } = require("./config/redis"); // Importa la función de conexión de Redis

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "../public")));

// Conectar a Redis antes de iniciar el servidor
connectRedis().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("❌ No se pudo conectar a Redis. Cerrando la aplicación...", err);
    process.exit(1);
});*/
