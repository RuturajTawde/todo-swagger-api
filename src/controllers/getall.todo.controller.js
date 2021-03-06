const { getallTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const getData = async (req, res, next) => {
  try {
    const response = await getallTodoService.getTask();
    if (response) responseHandler(res, 0, "Success", response, 200);
    else responseHandler(res, 1, "Failed", "Record not found", 404);
  } catch (error) {
    next(error);
  }
};

module.exports = getData;
