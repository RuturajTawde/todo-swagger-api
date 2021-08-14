const Task = require("../models/records.model");

const postTask = async (data) => {
  try {
    const { name, completed } = data;
    const tasks = await Task.create({ name, completed });
    return tasks;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { postTask };
