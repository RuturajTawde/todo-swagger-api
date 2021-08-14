const Task = require("../models/records.model");

const getOneTask = async (data) => {
  try {
    const tasks = await Task.findOne({ _id: data });
    return tasks;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { getOneTask };
