const { putTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const putData = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await putTodoService.putTask(data);
    if (response) responseHandler(res, 0, "Success", response, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = putData;
