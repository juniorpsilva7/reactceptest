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
import company_avatar3 from '../../images/digital.png';
import company_avatar4 from '../../images/microboard.jpg';
import company_avatar5 from '../../images/stone.png';
import company_avatar6 from '../../images/master.jpg';


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">Sobre Mim</h5>
        <Card>
          <div>
            <p><b>Resumo</b></p>
            <p>Profissional da área da Computação com vivência comercial/vendas e marketing. Desenvolvedor backend no Instituto Nacional de Telecomunicações/Ericsson e com prévia atuação no ramo de automação de dados (AIDC). Aficionado por tecnologia, trabalha na área desde 2008. Inglês e Espanhol para fala e escrita e possui disposição para aprendizado de diversas áreas que satisfaçam a empresa. Facilidade para trabalho em equipe e aberto para aprender o que for necessário e com rapidez.</p>
            <br/>
            </div>
        </Card>
        <h5 className="subtitle">Experiências</h5>
   

        {/* Passando os parâmetros title, company, periodo, description e avatar para o component Experience */}
        <Experience title="Especialista em Sistemas"
                    company="Instituto Nacional de Telecomunicações - INATEL"
                    periodo = "(Abr/2017-Atual)"
                    description="Desenvolvedor backend do segmento OSS e BSS da Ericsson, trabalhando com Javascript, Oracle PL/SQL, PostgreSQL, database migrations, manutenção em serviços REST, manipulação de JSON requests/response, resolução de problemas (JS/Java), novas funcionalidades, testes automatizados (postman/API própria em JS), testes de performance, versionamento com Git, Metodologia ágil Scrum."
                    avatar={company_avatar}
        />
        <Experience title="Analista de suporte"
                    company="Honeywell Sensing and Productivity Solutions"
                    periodo = "(Set/2012-Abr/2017)"
                    description="Ajudando e provendo soluções para clientes da América Latina, Central, EUA e outros países para português, inglês e espanhol, com uma alta taxa de satisfação de clientes. Grande conhecimento do segmento de automação de dados e dos produtos da empresa ajudando nos processos de homologação e pós-venda dos projetos. Plataformas Mobile, RFID, customizações de ambientes (scanning & mobile), etc. Parte do time de certificação ISO 9001 e do time de Kaizen global do departamento de suporte e também indicado para vários outros projetos internos."
                    avatar={company_avatar2}                   
        />

        <Experience title="Sócio Proprietário"
                    company="Digital VISU"
                    periodo = "(Nov/11-Ago/2012)"
                    description="Implantação em grande parte de Itajubá de uma tecnologia utilizada para publicidade chamada Mídia Digital Indoor. Atuando na administração da empresa, vendas, financeiro, criação de campanhas, parcerias, etc."
                    avatar={company_avatar3}                   
        />

        <Experience title="Supervisor de TI"
                    company="Microboard Indústria"
                    periodo = "(Abr/10-Nov/11)"
                    description="Analista de TI e posteriormente assumindo o cargo de Supervisor do departamento, assumindo os sites Itajubá/MG e SP (Av. Pres. JK, Itaim). Adquiri também grande conhecimento no ERP Microsiga participando na implantação no depto de pós-venda."
                    avatar={company_avatar4}                   
        />

        <Experience title="Gerente de Escritório"
                    company="StoneNet Provedores"
                    periodo = "(Ago/2009-Abr/2010)"
                    description="Convidado a assumir um papel de gestão do escritório na StoneNet, atuando em vendas, suporte, financeiro, organização geral, mantendo sempre o bom status da empresa. Hoje, a empresa foi adquirida para outra maior também da área de Telecom (DTC Telecom)."
                    avatar={company_avatar5}                   
        />

        <Experience title="Suporte Técnico"
                    company="Master Cabo Provedores"
                    periodo = "(Mar/2008-Jul/2009)"
                    description="Atuando na área de Redes e Internet, com foco no suporte aos clientes onde foi desenvolvida a capacidade de comunicação e tomada de decisão para a satisfação do cliente. Adquiri um grande conhecimento na área de rede e servidores de rede."
                    avatar={company_avatar6}                   
        />

    </Col>
  </Row>
);

export default Home;