import { useEffect, useState } from "react";
import { getUsers } from "../../services/firebase";
import { Filters, Users } from "./components";

const UsersListContainer = () => {
  const [query, setQuery] = useState({ id: "", name: "asd", email: "" });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(query).then((data) => {
      console.log(data);
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
