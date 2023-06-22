import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { Filters, Users } from "./components";

const UsersListContainer = () => {
  const [query, setQuery] = useState({ id: "", name: "", email: "" });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(query).then((data) => {
      setUsers(data);
    });
  }, [query]);

  return (
    <div>
      <h1>Usuarios</h1>
      <Filters onChange={setQuery} />
      <Users items={users} />
    </div>
  );
};

export { UsersListContainer };
