const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Agregar un producto al carrito
exports.addToCart = async (req, res) => {
    try {
        const { usuario_id, producto_id, cantidad } = req.body;

        let cart = await Cart.findOne({ usuario_id });

        // Buscar el producto en la base de datos
        const product = await Product.findById(producto_id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        if (!cart) {
            cart = new Cart({ usuario_id, productos: [], total: 0 });
        }

        // Verificar si el producto ya está en el carrito
        const existingProduct = cart.productos.find(p => p.producto_id.equals(producto_id));

        if (existingProduct) {
            existingProduct.cantidad += cantidad;
        } else {
            cart.productos.push({
                producto_id,
                nombre: product.nombre,
                cantidad,
                precio_unitario: product.precio_actual
            });
        }

        // Recalcular el total del carrito
        cart.total = cart.productos.reduce((sum, item) => sum + item.cantidad * item.precio_unitario, 0);
        cart.fecha_actualizacion = Date.now();

        await cart.save();
        res.status(200).json({ message: "Producto agregado al carrito", carrito: cart });

    } catch (error) {
        res.status(500).json({ message: "Error al agregar producto al carrito", error });
    }
};

// Obtener el carrito de un usuario
exports.getCart = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const cart = await Cart.findOne({ usuario_id }).populate("productos.producto_id");

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el carrito", error });
    }
};

// Eliminar un producto del carrito
exports.removeFromCart = async (req, res) => {
    try {
        const { usuario_id, producto_id } = req.body;
        let cart = await Cart.findOne({ usuario_id });

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        cart.productos = cart.productos.filter(p => !p.producto_id.equals(producto_id));

        // Recalcular el total
        cart.total = cart.productos.reduce((sum, item) => sum + item.cantidad * item.precio_unitario, 0);
        cart.fecha_actualizacion = Date.now();

        await cart.save();
        res.status(200).json({ message: "Producto eliminado del carrito", carrito: cart });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto del carrito", error });
    }
};

// Vaciar el carrito
exports.clearCart = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const cart = await Cart.findOneAndDelete({ usuario_id });

        if (!cart) {
            return res.status(404).json({ message: "Carrito no encontrado" });
        }

        res.status(200).json({ message: "Carrito vaciado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al vaciar el carrito", error });
    }
};
