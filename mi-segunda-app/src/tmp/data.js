import datos from "./data.json";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(datos);
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    resolve(datos.find((user) => user.id === id));
  });
};
