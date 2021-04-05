import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import ClientCRUD from "./client/ClientCRUD";
import ClientManager from "./client/ClientManager";
import { ContextData, ContextProvider } from "./ComponentContext";
import Login from "./login/Login";
import Menu from "./menu/Menu";
import Runner from "./runner/Runner";
import "./style.css";

function App() {

  const UserContext = React.createContext({
    user: null,
    clients: []
  });


  const [data] = useState<Partial<ContextData>>({})

  return (
    <ContextProvider value={data}>
      {/* <ToastDisplay /> */}
      {/* <Progress bar animated color="success" value="100">Carregando Clientes...</Progress> */}
      <HashRouter  >
        <Switch >
          <Route path="/menu" component={Menu} />
          <Route path="/client-crud" component={ClientCRUD} />
          <Route path="/client-manager" component={ClientManager} />
          <Route path="/runner" component={Runner} />
          <Route exact path="*" component={Login} />
        </Switch>
      </HashRouter >
    </ContextProvider>
  );
}


export default hot(App);

