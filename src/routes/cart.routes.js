const express = require("express");
const { addToCart, getCart } = require("../controllers/cart.controller");

const router = express.Router();

router.post("/", addToCart);
router.get("/:usuario_id", getCart);

module.exports = router;
