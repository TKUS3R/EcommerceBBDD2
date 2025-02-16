const express = require("express");
const { createInvoice, getInvoicesByUser } = require("../controllers/invoice.controller");

const router = express.Router()
const invoiceController = require("../controllers/invoice.controller");

router.post("/facturas", invoiceController.createInvoice);
router.get("/:usuario_id", invoiceController.getInvoicesByUser);
router.get("/", invoiceController.getAllInvoices);
router.get("/:id", invoiceController.getInvoiceById);
router.put("/:id", invoiceController.updateInvoice);
router.delete("/:id", invoiceController.deleteInvoice);

module.exports = router;
