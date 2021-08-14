const express = require("express");

const {
  postTodoController,
  getallTodoController,
  getoneTodoController,
  putTodoController,
  deleteTodoController,
} = require("../controllers");

const router = express.Router();

router.post("/", postTodoController).get("/", getallTodoController);
router
  .get("/:id", getoneTodoController)
  .put("/:id", putTodoController)
  .delete("/:id", deleteTodoController);

module.exports = router;
