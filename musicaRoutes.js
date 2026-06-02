const express = require("express");
const router = express.Router();

const controller = require("../controllers/musicaController");

router.get("/", controller.listarMusicas);
router.post("/", controller.adicionarMusica);

module.exports = router;