const Order = require("../models/Order");
const User = require("../models/User");

exports.createOrder = async (req, res) => {
    try {
        const { usuario_id, productos, direccion_envio } = req.body;

        const total = productos.reduce((sum, item) => sum + item.cantidad * item.precio_unitario, 0);

        const newOrder = new Order({
            usuario_id,
            productos,
            total,
            direccion_envio
        });

        await newOrder.save();

        // Agregar el pedido al historial del usuario
        await User.findByIdAndUpdate(usuario_id, { $push: { historial_pedidos: newOrder._id } });

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

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los pedidos", error });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Pedido no encontrado" });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el pedido", error });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrder) return res.status(404).json({ message: "Pedido no encontrado" });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar pedido", error });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: "Pedido no encontrado" });
        res.status(200).json({ message: "Pedido eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar pedido", error });
    }
};