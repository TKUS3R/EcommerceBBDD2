const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/products.controller");

const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/productos", productController.createProduct);
router.get("/", productController.getAllProducts);

module.exports = router;
