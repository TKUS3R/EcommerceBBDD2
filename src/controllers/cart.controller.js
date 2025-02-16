const { client } = require("../config/redis");

client.on("connect", () => {
    console.log("✅ Redis está disponible en cart.controller.js");
});

exports.addToCart = async (req, res) => {
    try {
        const { usuario_id, producto_id, cantidad } = req.body;

        if (!client.isOpen) {
            return res.status(500).json({ message: "Redis no está disponible" });
        }

        await client.hSet(`carrito:${usuario_id}`, producto_id, cantidad);
        res.json({ message: "✅ Producto agregado al carrito" });
    } catch (error) {
        console.error("❌ Error al agregar producto al carrito:", error);
        res.status(500).json({ message: "Error al agregar producto", error });
    }
};

exports.getCart = async (req, res) => {
    try {
        const { usuario_id } = req.params;

        if (!client.isOpen) {
            return res.status(500).json({ message: "Redis no está disponible" });
        }

        const cart = await client.hGetAll(`carrito:${usuario_id}`);
        res.json(cart);
    } catch (error) {
        console.error("❌ Error al obtener carrito:", error);
        res.status(500).json({ message: "Error al obtener carrito", error });
    }
};
