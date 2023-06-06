import { useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();

  // Acá tendría que tener la capacidad de obtener ese id
  // y con ese dato, ir a buscar a alguna fuente, los datos
  // de ese usuario en particular por id

  return <div>Mostrar los detalles del usuario con ID: {params.id}</div>;
};

export { UserDetail };
