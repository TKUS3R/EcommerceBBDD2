const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

router.post("/carrito/agregar", cartController.addToCart);
router.get("/carrito/:usuario_id", cartController.getCart);
router.delete("/carrito/eliminar", cartController.removeFromCart);
router.delete("/carrito/vaciar/:usuario_id", cartController.clearCart);

module.exports = router;
