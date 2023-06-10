import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";

const vehilces = [
  { id: 1, label: "Auto", value: "auto" },
  { id: 2, label: "Moto", value: "moto" },
];

const pets = [
  { id: 1, label: "Perro", value: "perro" },
  { id: 2, label: "Gato", value: "gato" },
  { id: 3, label: "Pez", value: "pez" },
];

const Login = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  const iniciarSesion = () => {};

  const goToSignUp = () => {};

  const procesoVehiculos = (e) => {
    console.log("proceso vehiculos", e.target.value);
  };
  const procesoMascotas = (e) => {
    console.log("proceso mascotas", e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos magni
        aliquam optio! <Link to="/signup">Crear cuenta</Link> unde nam? Nemo
        ullam labore nisi in vero adipisci? Animi quia nobis voluptatibus est
        accusamus.
      </p>

      <form action="">
        <input type="email" />
        <input type="password" />
        <Button className="btn" type="submit" onClick={iniciarSesion}>
          Inciar sesión
        </Button>
        <Button className="btn" type="button" onClick={goToSignUp}>
          Ir a crear una cuenta
        </Button>

        <Select items={vehilces} onChange={procesoVehiculos} />
        <Select items={pets} onChange={procesoMascotas} />
      </form>
    </div>
  );
};

export { Login };
