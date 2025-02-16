require("dotenv").config();
const { createClient } = require("redis");

console.log("🔍 Conectando a Redis con:");
console.log("➡️ Host:", process.env.REDIS_HOST);
console.log("➡️ Port:", process.env.REDIS_PORT);
console.log("➡️ Username:", process.env.REDIS_USERNAME || "default");
console.log("➡️ Password:", process.env.REDIS_PASSWORD ? "********" : "NO DEFINIDO");

const client = createClient({
    username: process.env.REDIS_USERNAME || "default",
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT, 10)
    }
});

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
