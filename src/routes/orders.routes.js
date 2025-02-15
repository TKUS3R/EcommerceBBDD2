const express = require("express");
const { createOrder, getOrdersByUser } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/:usuario_id", getOrdersByUser);

module.exports = router;


/*
POST /api/orders/ → Crear un pedido.
GET /api/orders/:usuario_id → Obtener pedidos de un usuario.
*/