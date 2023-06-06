import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos magni
        aliquam optio! <Link to="/signup">Crear cuenta</Link> unde nam? Nemo
        ullam labore nisi in vero adipisci? Animi quia nobis voluptatibus est
        accusamus.
      </p>
    </div>
  );
};

export { Login };
