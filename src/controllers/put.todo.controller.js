const { putTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const putData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const response = await putTodoService.putTask(id, data);
    if (response) responseHandler(res, 0, "Success", response, 200);
    else responseHandler(res, 1, "Failed", "Record not found", 404);
  } catch (error) {
    next(error);
  }
};

module.exports = putData;
