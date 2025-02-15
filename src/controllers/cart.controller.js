const redis = require("redis");
const client = redis.createClient();

client.connect();

exports.addToCart = async (req, res) => {
    try {
        const { usuario_id, producto_id, cantidad } = req.body;

        await client.hSet(`carrito:${usuario_id}`, producto_id, cantidad);
        res.json({ message: "Producto agregado al carrito" });
    } catch (error) {
        res.status(500).json({ message: "Error al agregar producto", error });
    }
};

exports.getCart = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const cart = await client.hGetAll(`carrito:${usuario_id}`);

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener carrito", error });
    }
};
