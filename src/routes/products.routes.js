const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/products.controller");

const router = express.Router();
const productController = require("../controllers/products.controller");

router.post("/productos", productController.createProduct);
router.get("/", productController.getAllProducts);;
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;