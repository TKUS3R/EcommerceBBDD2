const express = require("express");
const { register, login } = require("../controllers/users.controller");


const router = express.Router();

router.post("/register", register);
router.post("/login", login);


const express = require("express");
const usersController = require("../controllers/users.controller");

router.post("/usuarios", usersController.createUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;


module.exports = router;
