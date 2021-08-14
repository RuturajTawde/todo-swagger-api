const Task = require("../models/records.model");

const deleteTask = async (data) => {
  try {
    const tasks = await Task.findOneAndDelete({ _id: data._id });
    return tasks;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { deleteTask };
