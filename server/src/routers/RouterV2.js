const express = require("express");

const router = express.Router();

// TodosRouter
const { getTodos } = require("../controllers/versi2/Totos");

router.get("/todos", getTodos);
// EndTodosRouter

module.exports = router;
