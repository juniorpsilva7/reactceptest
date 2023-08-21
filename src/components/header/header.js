// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="amber">
    <li><NavLink to="/" className="black-text">Busca CEP</NavLink></li>
      <li><NavLink to="about" className="black-text">Sobre Mim</NavLink></li>
      <li><NavLink to="contact" className="black-text">Contato</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;