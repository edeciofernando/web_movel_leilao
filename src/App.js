import React from 'react'
import Titulo from './components/Titulo'
import Detalhes from './components/Detalhes';
import ListaObras from './components/ListaObras';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Titulo />
      <Route path="/" exact component={ListaObras} />
      <Route path="/detalhes/:id" component={Detalhes} />
    </Router>
  );
}

export default App;
