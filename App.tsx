import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Table from "./src/pages/table";
import Analitic from "./src/pages/analitic";
import Home from "./src/pages/home";
import GuardedRoute from "./src/services/guardedRoutes";
import Login from './src/pages/login';
import PrivateRoute from "./src/services/privateRoutes";
import RegistrationList from "./src/pages/cadList";
import FormCadastro from "./src/pages/newUser";


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
        <Route path="/newUser" element={<FormCadastro />}></Route>
        <PrivateRoute path="/home" component={<Home/>} auth={autenticado} />
        <PrivateRoute path="/table" component={<Table/>} auth={autenticado} />
        <PrivateRoute path="/analitic" component={<Analitic/>} auth={autenticado} />
        <PrivateRoute path="/cadList" component={<RegistrationList/>} auth={autenticado} />
      </Routes>
    </BrowserRouter>
  );
}