// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Contact from "./components/contact/contact";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
// Importantando o component CepHome
import CepHome from "./components/cep/cephome";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={CepHome}/>
        <Route path='/home' component={Home}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;