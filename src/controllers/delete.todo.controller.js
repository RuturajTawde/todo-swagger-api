const { deleteTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const deleteData = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await deleteTodoService.deleteTask(data);
    if (response) responseHandler(res, 0, "Success", response, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteData;
