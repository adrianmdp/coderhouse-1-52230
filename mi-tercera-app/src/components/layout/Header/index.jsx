import { memo } from "react";

const HeaderComponent = ({ item }) => {
  const operacionCostosa = () => {
    // cod
  };

  return <header>Este es el header {item}</header>;
};

const condicionesDeActualizacion = (prevProps, nextProps) => {};

const Header = memo(HeaderComponent, condicionesDeActualizacion);

export { Header };
