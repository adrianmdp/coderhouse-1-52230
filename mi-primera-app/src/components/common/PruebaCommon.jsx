import { Button } from "react-bootstrap";
import { Header } from "./Header";

const Layout = ({ children, theme }) => {
  return (
    <>
      <Header>Acá va el contenido del header</Header>

      <main>{children}</main>

      <footer>Acá va el contenido del footer</footer>
    </>
  );
};

const PruebaCommon = () => {
  return (
    <Layout theme="dark">
      <h1>Prueba</h1>
      <h2>Prueba</h2>
      <Button />
    </Layout>
  );
};

export { PruebaCommon };
