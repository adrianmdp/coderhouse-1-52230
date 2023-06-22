import { createContext, useState } from "react";

const AuthContext = createContext({
  me: {},
  isAuthenticated: false,
});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState("Adrian");
  const [me, setMe] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ data, setData, me, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
