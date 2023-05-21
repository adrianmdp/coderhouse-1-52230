import { Button } from "../../common/button";

const LoginForm = () => {
  const login = () => {
    // se procesa el login
  };

  return (
    <form onSubmit={login}>
      <div className="form-control">
        <label htmlFor=""></label>
        <input type="email" name="email" id="email-control" />
      </div>
      <div className="form-control">
        <label htmlFor=""></label>
        <input type="password" name="pass" id="pass-control" />
      </div>
      <Button text="Iniciar sesión" type="submit" />
    </form>
  );
};

export { LoginForm };
