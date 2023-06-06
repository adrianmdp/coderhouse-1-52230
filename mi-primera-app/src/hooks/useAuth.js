import { useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (user, pass) => {
    // lógica de login
    console.log(user, pass);
    setIsAuth(true);
  };

  const logout = () => {};

  const recoveryPassword = () => {};

  const signUp = () => {};

  const obj = { login, logout, recoveryPassword, signUp, isAuth };

  return obj;
};

export { useAuth };
