// Importando o React
import React from "react";
// Importando o component Home
import Home from "./components/home/home";
// Imeportando component Contact
import Contact from "./components/contact/contact";
// Importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';
// Importando o component <Swich /> e <Route /> da nossa lib de rotas
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={Contact}/>
        <Route/>
      </Switch>
    </Container>
  </main>  
);

export default Main;