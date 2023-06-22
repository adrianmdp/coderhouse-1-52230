import { useState, memo } from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { AuthProvider } from "./context/auth";
import {
  AddCategory,
  AddTask,
  Login,
  SignUp,
  UsersListContainer,
} from "./pages";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3h4-17J2PAMfXtq8ctA7MLQQv2gT6rcc",
  authDomain: "coderhouse-3d1c8.firebaseapp.com",
  projectId: "coderhouse-3d1c8",
  storageBucket: "coderhouse-3d1c8.appspot.com",
  messagingSenderId: "890468052370",
  appId: "1:890468052370:web:0fe0cd32eb510918b2654b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<TasksListContainer />} />
            <Route
              path="/category/:catId/:otroParam"
              element={<TasksListContainer />}
            />
            <Route path="/task-detail/:id" element={<TaskDetailContainer />} /> */}
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
