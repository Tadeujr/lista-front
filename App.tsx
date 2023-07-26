import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Table from "./src/pages/table";
import Analitic from "./src/pages/analitic";
import Profile from "./src/pages/profile";
import Home from "./src/pages/home";
import GuardedRoute from "./src/services/guardedRoutes";
import Login from './src/pages/login';
import PrivateRoute from "./src/services/privateRoutes";
import RegistrationList from "./src/pages/cadList";


export default function App() {
  let storage = JSON.parse(localStorage.getItem("list@token"));
  
  function estaAutenticado() {
    return storage !== ""; // Verifica se o token existe
  }

  console.log(estaAutenticado());
  let autenticado = estaAutenticado();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <PrivateRoute path="/home" component={<Home/>} auth={autenticado} />
        <PrivateRoute path="/table" component={<Table/>} auth={autenticado} />
        <PrivateRoute path="/analitic" component={<Analitic/>} auth={autenticado} />
        <PrivateRoute path="/profile" component={<Profile/>} auth={autenticado} />
        <PrivateRoute path="/cadList" component={<RegistrationList/>} auth={autenticado} />
      </Routes>
    </BrowserRouter>
  );
}