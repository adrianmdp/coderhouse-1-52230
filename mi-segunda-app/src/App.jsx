import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { Home } from "./pages/home";
import { MainNav } from "./components/MainNav";
import { UsersList } from "./pages/users-list";
import { UserDetail } from "./pages/user-detail";

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
