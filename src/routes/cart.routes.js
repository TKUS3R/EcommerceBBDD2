const express = require("express");
const { addToCart, getCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/", addToCart);
router.get("/:usuario_id", getCart);

module.exports = router;
