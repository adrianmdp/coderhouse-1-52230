import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useState } from "react";

const saludar = (callback, deps) => {
  callback();
};

const TestUseEffect = ({ prop1 }) => {
  const [dato1, setDato1] = useState("Dato1");
  const [dato2, setDato2] = useState("Dato2");

  saludar();

  //   useEffect(() => {});

  //   useEffect(() => {
  //     console.log(
  //       "Este es el mount del componente pero si tiene una dependendcia o mas, va a ejecutarse cada vez que cambie la dependencia"
  //     );

  //     // Ir a buscar peliculas a una base de datos según un filtro
  //   }, [dato1 /* filtro */]);

  return (
    <div>
      <div>{dato1}</div>
      <button onClick={() => setDato1("Cambió el estado de Dato1")}>
        Cambiar dato 1
      </button>
      <div>{dato2}</div>
      <button onClick={() => setDato2("Cambió el estado de Dato2")}>
        Cambiar dato 2
      </button>
    </div>
  );
};

export { TestUseEffect };
