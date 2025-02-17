// config/redis.js
require("dotenv").config();
const { createClient } = require("redis");

// Verificar que la URL de Redis se esté cargando
console.log("🔍 Conectando a Redis con URL:", process.env.REDIS_URL);

const client = createClient({
    url: process.env.REDIS_URL, // Usa la URL de Redis
    username: process.env.REDIS_USERNAME || "default",
    password: process.env.REDIS_PASSWORD,
});

// El resto del código...

client.on("error", (err) => console.error("❌ Redis Client Error:", err));

async function connectRedis() {
    if (!client.isOpen) {
        try {
            await client.connect();
            console.log("✅ Conectado a Redis");
        } catch (err) {
            console.error("❌ Error al conectar a Redis:", err);
        }
    } else {
        console.log("⚠️ Redis ya está conectado.");
    }
}

module.exports = { client, connectRedis };