import { useEffect, useState } from "react";

const getUsers = new Promise((resolve, reject) => {
  const users = [
    {
      id: "asd123",
      name: "Juan",
      lastName: "Perez",
      email: "juan@coderhouse.com",
    },
    {
      id: "asd456",
      name: "Ana",
      lastName: "Fernandez",
      email: "ana@coderhouse.com",
    },
    {
      id: "asd789",
      name: "Pedro",
      lastName: "Mármol",
      email: "pedro@coderhouse.com",
    },
  ];

  setTimeout(() => {
    resolve(users);
  }, 2000);
});

const Users = () => {
  //   const [msg, setMsg] = useState("");

  //   const changeUser = () => {
  //     setUser({ ...user, country: "Argentina" });
  //   };

  //   useEffect(() => {
  //     console.log(
  //       "Esto se ejectuta al momento de montar el componente o actualizarlo"
  //     );
  //   });

  //   useEffect(() => {
  //     console.log("Esto se ejectuta al momento de montar el componente");
  //   }, []);

  //   useEffect(() => {
  //     console.log(
  //       "Esto se ejectuta al momento de montar el componente y cuando cambia el estado msg"
  //     );
  //   }, [msg]);

  const [users, setUser] = useState(getUsers());

  return (
    <>
      {/* <div>{msg}</div> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <button onClick={changeUser}>Modificar user</button>
      <button onClick={() => setMsg("Cambió el estado mensaje")}> */}
      {/* Cambiar msg
      </button> */}
    </>
  );
};

export { Users };
