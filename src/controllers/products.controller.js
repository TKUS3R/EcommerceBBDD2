const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try {
        const { nombre, descripcion, categorias, precio_actual, stock, imagen } = req.body;

        const newProduct = new Product({
            nombre,
            descripcion,
            categorias,
            precio_actual,
            historial_precios: [{ precio: precio_actual }],
            stock,
            imagen
        });

        await newProduct.save();
        res.status(201).json({ message: "Producto creado exitosamente", producto: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};
