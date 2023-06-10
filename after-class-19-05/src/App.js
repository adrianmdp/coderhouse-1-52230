import {
  AddCategory,
  AddTask,
  Home,
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
        <Routes>
          <Route path="/" element={<TasksListContainer />} />
          <Route path="/category/:catId" element={<TasksListContainer />} />
          <Route path="/task-detail/:id" element={<TaskDetailContainer />} />

          <Route path="/" element={<AddCategory />} />
          <Route path="/" element={<AddTask />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
