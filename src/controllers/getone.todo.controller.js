const { getOneTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const getData = async (req, res, next) => {
  try {
    const data = req.params.id;
    const response = await getOneTodoService.getOneTask(data);
    if (response) responseHandler(res, 0, "Success", response, 200);
    else responseHandler(res, 1, "Failed", "Record not found", 404);
  } catch (error) {
    next(error);
  }
};

module.exports = getData;
