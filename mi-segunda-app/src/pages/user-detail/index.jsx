import { useParams } from "react-router-dom";
import { getUser } from "../../tmp/data";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const { id } = useParams();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    console.log(id);
    getUser(id).then((user) => {
      setUser(user);
    });
  }, [id]);

  if (!user) return <p>Cargando...</p>;

  return (
    <>
      <h1>Mostrar los detalles del usuario con ID: {id}</h1>

      <div
        className="card"
        style={{ border: "1px solid #CCC", padding: "1rem" }}
        onClick={() => {
          console.log("abrir modal con mas detalles");
        }}
      >
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Ver amigos");
          }}
        >
          Ver amigos
        </button>
      </div>
    </>
  );
};

export { UserDetail };
