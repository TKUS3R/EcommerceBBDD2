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

// Obtener todas las facturas
exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener facturas", error });
    }
};

// Obtener factura por ID
exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) return res.status(404).json({ message: "Factura no encontrada" });
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener factura", error });
    }
};

// Modificar factura
exports.updateInvoice = async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInvoice) return res.status(404).json({ message: "Factura no encontrada" });
        res.status(200).json(updatedInvoice);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar factura", error });
    }
};

// Eliminar factura
exports.deleteInvoice = async (req, res) => {
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!deletedInvoice) return res.status(404).json({ message: "Factura no encontrada" });
        res.status(200).json({ message: "Factura eliminada correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar factura", error });
    }
};
