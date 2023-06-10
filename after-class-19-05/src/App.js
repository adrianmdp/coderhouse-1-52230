import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import {
  AddCategory,
  AddTask,
  Login,
  SignUp,
  TaskDetailContainer,
  TasksListContainer,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TasksListContainer />} />
          <Route path="/category/:catId" element={<TasksListContainer />} />
          <Route path="/task-detail/:id" element={<TaskDetailContainer />} />

          <Route path="/" element={<AddCategory />} />
          <Route path="/" element={<AddTask />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
