const { postTodoService } = require("../services");
const responseHandler = require("../helpers/responseHandler");

const postData = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await postTodoService.postTask(data);
    if (response) responseHandler(res, 0, "Success", response, 200);
  } catch (error) {
    next(error);
  }
};

module.exports = postData;
