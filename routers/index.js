const { Router } = require("express");
const { mostrarTrabajos } = require("../controllers/home");

const router = Router();

router.get("/", mostrarTrabajos);

module.exports = router;
