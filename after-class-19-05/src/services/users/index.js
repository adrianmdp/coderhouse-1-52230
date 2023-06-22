import users from "../../tmp/users.json";

const getUsers = (query) => {
  return new Promise((resolve, reject) => {
    let filteredUsers = users;

    if (query.id !== "") {
      filteredUsers = filteredUsers.filter((user) => user.id === query.id);
    }
    if (query.name !== "") {
      filteredUsers = filteredUsers.filter((user) => user.name === query.name);
    }
    if (query.email !== "") {
      filteredUsers = filteredUsers.filter(
        (user) => user.email === query.email
      );
    }
    resolve(filteredUsers);
  });
};

export { getUsers };
