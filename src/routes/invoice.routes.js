const express = require("express");
const { createInvoice, getInvoicesByUser } = require("../controllers/invoiceController");

const router = express.Router();

router.post("/", createInvoice);
router.get("/:usuario_id", getInvoicesByUser);

module.exports = router;
