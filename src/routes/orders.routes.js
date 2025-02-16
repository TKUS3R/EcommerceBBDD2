const express = require("express");
const { createOrder, getOrdersByUser } = require("../controllers/orders.controller");

const router = express.Router();

router.post("/pedidos", orderController.createOrder);
router.get("/:usuario_id", orderController.getOrdersByUser);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.put("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;


/*
POST /api/orders/ → Crear un pedido.
GET /api/orders/:usuario_id → Obtener pedidos de un usuario.
*/