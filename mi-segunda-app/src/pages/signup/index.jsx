import React, { useContext, useState, useEffect } from "react";
import { Checkboxes } from "../../components/checkboxes";

const pets = [
  { id: 1, label: "Perro", value: "perro" },
  { id: 2, label: "Gato", value: "gato" },
  { id: 3, label: "Pez", value: "pez" },
];

const vehicles = [
  { id: 1, label: "Auto", value: "auto" },
  { id: 2, label: "Moto", value: "moto" },
  { id: 3, label: "Bicicleta", value: "bicicleta" },
];

const options = [
  { id: 1, label: "Mantener la sesión iniciada", value: "opcion1" },
  { id: 1, label: "Acepto las condiciones de uso", value: "opcion2" },
];

const SignUp = () => {
  const mascotasSeleccionadas = () => {
    // Acá hago algo con las mascotas que seleccionó el usuario
  };

  const vehiculosSleccionados = () => {
    // Acá hago algo con los vehículos que seleccionó el usuario
  };

  const opcionesSleccionados = () => {
    // Acá hago algo con las opciones que seleccionó el usuario
  };

  const [value, setValue] = useState("");

  const myContext = useContext();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>SignUp</h1>
      <Checkboxes items={pets} name="pets" onChange={mascotasSeleccionadas} />
      <hr />
      <Checkboxes
        items={vehicles}
        name="vahicles"
        onChange={vehiculosSleccionados}
      />
      <hr />
      <Checkboxes
        items={options}
        name="options"
        onChange={opcionesSleccionados}
      />
    </div>
  );
};

export { SignUp };
