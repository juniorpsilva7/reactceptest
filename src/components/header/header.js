// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="amber">
    <li><NavLink to="/"><font color="black">Busca CEP</font></NavLink></li>
      <li><NavLink to="home"><font color="black">Sobre Mim</font></NavLink></li>
      <li><NavLink to="contact"><font color="black">Contato</font></NavLink></li>
    </Navbar>
  </Row>
);

export default Header;