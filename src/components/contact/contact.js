// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando Icones
import whatsLogo from '../../images/whats.jpg';
import gmailLogo from '../../images/gmail.png';
import inLogo from '../../images/linkedin.jpg';

const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Informações de Contato</h5>
        <Card>
          <Row>
              <p><b>Telefone </b><img src={whatsLogo} height="20" /></p>
              <p>+ 55 (35) 99168-5152</p>
              <p><b>Email </b><img src={gmailLogo} height="17" /></p>
              <p>juniorpsilva7@gmail.com</p>
              <p><b>LinkedIn </b><img src={inLogo} height="25" /></p>
              <a href="https://www.linkedin.com/in/juniorpsilva/">https://www.linkedin.com/in/juniorpsilva/</a>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;