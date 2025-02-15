const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
});

redis.on('connect', () => console.log('✅ Conectado a Redis Remoto'));
redis.on('error', (err) => console.error('❌ Error en Redis:', err));

module.exports = redis;
