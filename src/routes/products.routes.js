const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/products.controller");
const { getHardcodedProducts } = require("../controllers/productController");

const router = express.Router();
const productController = require("../controllers/products.controller");

router.post("/productos", productController.createProduct);
router.get("/", productController.getAllProducts);;
router.get("/:id", productController.getProductById);
router.get("/hardcoded", getHardcodedProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
