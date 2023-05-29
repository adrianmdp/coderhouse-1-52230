import { useState, useEffect } from "react";
import Button from "./components/common/Button";
import { PruebaCommon } from "./components/common/PruebaCommon";
import { TestUseEffect } from "./TestUseEffect";
import { Users } from "./pages/users";

function App() {
  const name = "Pepe";

  const [theme, setTheme] = useState("dark");

  const login = (e) => {
    e.preventDefault();
    // Procesamos el login de un usuario
    console.log("Procesamos el login de un usuario");
  };

  useEffect(() => {
    console.log("Estoy en app");
  }, [theme]);

  return (
    <div>
      {/* <button onClick={() => setTheme("light")}>modo claro</button>
      <button onClick={() => setTheme("dark")}>Cambiar oscuro</button>
      <h1>{theme}</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>{name}</li>
      </ul>
      <form>
        {/* Los inputs */}
      {/* <Button
          className="btn btn-primary"
          type="submit"
          handleClick={login}
          text="Iniciar sesión"
        />
      </form> */}

      {/* <TestUseEffect /> */}

      <Users>
        <div>Este es un div que llega del parent</div>
      </Users>

      {/* <Button text="Enviar" className="btn btn-secondary" onClick={logout} />
      <Button text="Enviar" className="btn btn-secondary" onClick={sendMail} /> */}

      {/* <PruebaCommon /> */}
    </div>
  );
}

export default App;
