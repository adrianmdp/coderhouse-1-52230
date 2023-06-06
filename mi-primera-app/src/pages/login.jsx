import { FormLogin } from "../components/forms/FormLogin";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login, isAuth } = useAuth();

  return (
    <div>
      <h1>Login</h1>
      {isAuth ? "El usuario esta logueado" : "El usuario no esta logueado"}
      <FormLogin onSubmit={login} />
    </div>
  );
};

export { Login };
