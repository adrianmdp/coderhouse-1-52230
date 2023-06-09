import { useState } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AuthContext, AuthProvider } from "./context/auth";
import {
  AddCategory,
  AddTask,
  Login,
  SignUp,
  TaskDetailContainer,
  TasksListContainer,
  UsersListContainer,
} from "./pages";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  const [value, setValue] = useState("adrian");

  const cambiarValor = () => {
    setValue("nuevo valor");
  };

  if(value === "adrian") return (<>Muestro este conteido condicional</>)

  return (
    <div className="App">
      <AuthProvider>
       
        <button onClick={cambiarValor}>Cambiar value</button>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<TasksListContainer />} />
            <Route
              path="/category/:catId/:otroParam"
              element={<TasksListContainer />}
            />
            <Route path="/task-detail/:id" element={<TaskDetailContainer />} />
            <Route path="/users" element={<UsersListContainer />} />

            <Route path="/" element={<AddCategory />} />
            <Route path="/" element={<AddTask />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
