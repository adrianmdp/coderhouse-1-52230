import { tasks } from "../../../tmp/data";

const getTasks = async (catId) => {
  return new Promise((resolve, reject) => {
    resolve(catId ? tasks.filter((task) => task.categoryId === catId) : tasks);
  });
};

const getTask = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(tasks.find((task) => task.id === id));
  });
};

const updateTask = async (task) => {};

const deleteTask = async (id) => {};

const createTask = async (task) => {};

export { getTasks, getTask };
