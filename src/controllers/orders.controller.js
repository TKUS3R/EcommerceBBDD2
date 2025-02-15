const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
    try {
        const { usuario_id, productos } = req.body;

        const total = productos.reduce((sum, item) => sum + item.cantidad * item.precio_unitario, 0);

        const newOrder = new Order({ usuario_id, productos, total });
        await newOrder.save();

        res.status(201).json({ message: "Pedido creado exitosamente", pedido: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el pedido", error });
    }
};

exports.getOrdersByUser = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const orders = await Order.find({ usuario_id });

        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener pedidos", error });
    }
};
