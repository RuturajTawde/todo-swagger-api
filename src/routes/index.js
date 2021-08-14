const express = require("express");

const todoRoutes = require("./todo.routes");

const router = express.Router();

router.use("/api/v1/todo", todoRoutes);

module.exports = router;
