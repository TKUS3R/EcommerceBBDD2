const Invoice = require("../models/Invoice");

exports.createInvoice = async (req, res) => {
    try {
        const { pedido_id, usuario_id, total, metodo_pago } = req.body;

        const newInvoice = new Invoice({ pedido_id, usuario_id, total, metodo_pago, estado: "Pendiente" });
        await newInvoice.save();

        res.status(201).json({ message: "Factura creada exitosamente", factura: newInvoice });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la factura", error });
    }
};

exports.getInvoicesByUser = async (req, res) => {
    try {
        const { usuario_id } = req.params;
        const invoices = await Invoice.find({ usuario_id });

        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener facturas", error });
    }
};
