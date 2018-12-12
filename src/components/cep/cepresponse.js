// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const CepResponse = (props) => (
  <Card>
      <Row>
      <Col s={8} s={12}>
                <h5><p><b>{props.logradouro}</b></p></h5>
                <p><b>{props.bairro}</b></p>
                <p><b>{props.cidade} {props.uf}</b></p>
                <p><b>{props.cep}</b></p>   
      </Col>
      </Row>
  </Card>
);

export default CepResponse;