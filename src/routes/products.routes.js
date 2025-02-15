const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/products.controller");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);

module.exports = router;
