const Task = require("../models/records.model");

const getTask = async () => {
  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { getTask };
