import { useState } from "react";

const auth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (user, pass) => {};

  const logout = () => {};

  const recoveryPassword = () => {};

  const signUp = () => {};

  return { login, logout, recoveryPassword, signUp };
};

export { auth };
