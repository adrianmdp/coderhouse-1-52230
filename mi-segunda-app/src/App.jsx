import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp, UserDetail, UsersList } from "./pages";
import { MainNav } from "./components";

function App() {
  // Acá los recursos de react-router-dom no funcionan

  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
