import React from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import { Navigate, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import useGetCity from "./hooks/useGetCity";
import Nav from "./Components/Nav";
export const serverUrl = "http://localhost:8000";

function App() {
  useGetCurrentUser();
  useGetCity;
  const { userData } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route
        path="/signup"
        element={!userData ? <SignUp /> : <Navigate to={"/"} />}
      />
      <Route
        path="/signin"
        element={!userData ? <SignIn /> : <Navigate to={"/"} />}
      />
      <Route
        path="/forgot-password"
        element={!userData ? <ForgotPassword /> : <Navigate to={"/"} />}
      />
      <Route
        path="/"
        element={userData ? <Home /> : <Navigate to={"/signin"} />}
      />
    </Routes>
  );
}

export default App;
