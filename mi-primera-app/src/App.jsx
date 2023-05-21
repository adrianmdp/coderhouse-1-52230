import "./App.css";
import Comp2 from "./Comp2";
import Prueba from "./Prueba";
import Button from "./components/common/Button";

function App() {
  const name = "Pepe";

  const login = (e) => {
    e.preventDefault();
    // Procesamos el login de un usuario
    console.log("Procesamos el login de un usuario");
  };

  return (
    <div>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>{name}</li>
      </ul>
      <Comp2 titulo="Hola mundo" />
      <Comp2 titulo="Lorem Ipsum" />

      <form>
        {/* Los inputs */}
        <Button
          className="btn btn-primary"
          type="submit"
          handleClick={login}
          text="Iniciar sesión"
        />
      </form>

      {/* <Button text="Enviar" className="btn btn-secondary" onClick={logout} />
      <Button text="Enviar" className="btn btn-secondary" onClick={sendMail} /> */}

      <Prueba />
    </div>
  );
}

export default App;
