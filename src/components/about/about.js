// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar das empresas
import company_avatar from '../../images/inatel.jpg';
import company_avatar2 from '../../images/honeywell.jpg';
import company_avatar3 from '../../images/easy-logo.jpeg';
import company_avatar4 from '../../images/microboard.jpg';



const About = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre Mim</h5>
        <Card>
          <div>
            <p><b>Resumo</b></p>
            <p>Atuo com tecnologia desde 2008. Desenvolvedor, conhecimentos em .Net (foco atual), Javascript (Node.js, React, Angular), PHP. Experiência em bancos de dados como MySql, SQL Server, Oracle PL/SQL, PostgreSQL e MongoDB. 3 anos em ambientes Scrum, CI/CD, testes unitários, TDD/BDD, DDD clean architecture, boas práticas de clean code e versionamento com Git.</p>
            <p><b>Skills:</b>
            <li>Linguagens: C# | Javascript | PHP | HTML | CSS</li>
            <li>Full-Stack: .Net Core | Node.js | Angular | React</li>
            <li>Bancos: MySQL, PostgreSQL, Oracle PL/SQL, MongoDB (não relacional)</li>
            <li>Ferramentas: Azure DevOps, Git, PowerBI, Excel, </li>
            <li>CRM: Salesforce</li>
            <li>Web: Wordpress (Elementor)</li>
            </p>
            <br/>
            </div>
        </Card>
        <h5 className="subtitle">Experiências</h5>
   

        {/* Passando os parâmetros title, company, periodo, description e avatar para o component Experience */}
        <Experience title="Analista de sistemas sênior"
                    company="Easy Access"
                    periodo = "(Mar/2020-Abr/2023)"
                    description="- Iniciei e estruturei o suporte como supervisor do time, atuando como Zendesk Administrator, integrações via API, gatilhos e relatórios.
                    - Realizei homologações de serviços (RFID/Linux/Raspberry) para o primeiro contrato da startup e atuei no monitoramento de todo parque tecnológico. 
                    - Atuei como analista nível 3, resolvendo problemas complexos, analisando logs em servidores Linux, criando automações de sistema, migrando bancos de dados e criando processos para sistema da qualidade."
                    avatar={company_avatar3}
        />
        <Experience title="Desenvolvedor Backend"
                    company="Instituto Nacional de Telecomunicações - INATEL"
                    periodo = "(Abr/2017-Out/2019)"
                    description="- Projeto 1 (Ericsson): Atuei como Dev backend em sistema legado de porte global, trabalhando com Javascript, Oracle PL/SQL, PostgreSQL. Migração de dados, manutenção REST, resolução de bugs (JS/Java), novas funcionalidades, testes automatizados (Postman/API própria JS), testes de performance, Git, Scrum. - Projeto 2 (EAD Inatel): Implantação do EAD Inatel, PHP+Mysql em Wordpress, customização plugins em PHP."
                    avatar={company_avatar}
        />
        <Experience title="Analista de suporte"
                    company="Honeywell Sensing and Productivity Solutions"
                    periodo = "(Set/2012-Abr/2017)"
                    description="Ajudando e provendo soluções para clientes da América Latina, Central, EUA e outros países para português, inglês e espanhol, com uma alta taxa de satisfação de clientes. Grande conhecimento do segmento de automação de dados e dos produtos da empresa ajudando nos processos de homologação e pós-venda dos projetos. Plataformas Mobile, RFID, customizações de ambientes (scanning & mobile), etc. Parte do time de certificação ISO 9001 e do time de Kaizen global do departamento de suporte e também indicado para vários outros projetos internos."
                    avatar={company_avatar2}                   
        />

        <Experience title="Supervisor de TI"
                    company="Microboard Indústria"
                    periodo = "(Abr/10-Nov/11)"
                    description="Analista de TI e posteriormente assumindo o cargo de Supervisor do departamento, assumindo os sites Itajubá/MG e SP (Av. Pres. JK, Itaim). Adquiri também grande conhecimento no ERP Microsiga participando na implantação no depto de pós-venda."
                    avatar={company_avatar4}                   
        />

    </Col>
  </Row>
);

export default About;