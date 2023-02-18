import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Table from "./pages/table";

export default function Routes() {
  let storage = JSON.parse(localStorage.getItem("adotei@token") | {});

  function estaAutenticado() {
    return storage.token !== "";
  }

  let autenticado = estaAutenticado();

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Login} />
        <Route path="/registeruser" component={RegisterUser} /> */}
        <GuardedRoute
          path="/product"
          component={Table}
          auth={autenticado}
        />
        {/* <GuardedRoute
          path="/profileong"
          component={ProfileOng}
          auth={autenticado}
        />
        <GuardedRoute path="/new" component={NewPet} auth={autenticado} />
        <GuardedRoute path="/adocao" component={Adocao} auth={autenticado} />
        <GuardedRoute path="/buscar" component={BuscaPet} auth={autenticado} />
        <GuardedRoute
          path="/cabecalho"
          component={Cabecalho}
          auth={autenticado}
        />
        <GuardedRoute
          path="/buscapet"
          component={BuscaPet}
          auth={autenticado}
        /> */}
      </Switch>
    </BrowserRouter>
  );
}