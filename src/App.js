import React from "react";
import ListaObras from "./components/ListaObras";
import Titulo from "./components/Titulo";
import Detalhes from "./components/Detalhes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Titulo />
      <Switch>
        <Route path="/" exact>
          <ListaObras />
        </Route>
        <Route path="/detalhes/:id">
          <Detalhes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
