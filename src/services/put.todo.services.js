const Task = require("../models/records.model");

const putTask = async (id, data) => {
  try {
    const tasks = await Task.findOneAndUpdate(
      {
        _id: id,
      },
      {
        name: data.name,
        completed: data.completed,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return tasks;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { putTask };
