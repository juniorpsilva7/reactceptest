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
                <p>{props.bairro}</p>
                <p>{props.cidade} {props.uf}</p>
                <p>{props.cep}</p>   
      </Col>
      </Row>
  </Card>
);

export default CepResponse;