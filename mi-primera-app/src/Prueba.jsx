import { useState } from "react";

const Prueba = () => {
  const [isActive, setIsActive] = useState("false");

  const handleChangeState = () => {
    setIsActive("true");
  };

  return (
    <>
      <div>Hola</div>
      <div>Mundo</div>
      <button onClick={handleChangeState}>Cambiar estado</button>
      {isActive}
    </>
  );
};

export default Prueba;
