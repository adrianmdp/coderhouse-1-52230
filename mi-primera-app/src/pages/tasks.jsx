import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Tasks = () => {
  const [name, setName] = useState();

  const miHook = useAuth();

  const miFuncion = () => {};

  return <div>Estamos en tasks</div>;
};

export { Tasks };
