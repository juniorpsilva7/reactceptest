// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

// Recebe os parâmetros passadados para o Componenet na variável props
const CepInput = () => (
    <Card>
    <Row>
        <Input placeholder="Digite o CEP" label="CEP" s={12} />
        <Col s={12} m={12}>
        <Button waves='light' className="right grey darken-2">Buscar</Button>
        </Col>
    </Row>
    </Card>
);

export default CepInput;