import { useEffect } from "react";

const Home = () => {
  const hideImages = () => {
    // ocultaríamos las images
  };

  useEffect(() => {
    window.addEventListener("resize", hideImages);

    return () => {
      window.removeEventListener("resize", hideImages);
    };
  }, []);

  const login = (e) => {
    e.preventDefault();
    console.log("procesar login");
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={login}>Enviar</button>

      <form onSubmit={login}>
        <button type="submit" id="my-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export { Home };
