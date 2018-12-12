// Importando o React
import React, { Component } from 'react';
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button, RaisedButton } from 'react-materialize';
// Importando o component CepResponse
// import CepInput from '../cep/cepinput'
// Importando o component CepResponse
import CepResponse from '../cep/cepresponse'


// function getCep(cepvalue) {
//   console.log(cepvalue)
//     return fetch('https://viacep.com.br/ws/37502028/json/?callback=myfn')
//     // .then((response) => {
//     //     console.log("TESTE!!!!!!!!!!!!!! ");
//     //     response.json();
//     // })
//     .then((responseJson) => {
//         console.log("TESTE!!!!!!!!!!!!!! " + cepvalue);
//       return responseJson.cep;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//  }

class CepApp extends Component {

  constructor(props) {
    super(props);
    this.state = {inputVal: "37502028", data: []}
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(name, event) {
    this.setState({...this.state, [name]: event.target.value})
  } 

  loadData(cepvalue, event) {
    var url = 'https://viacep.com.br/ws/'+cepvalue+'/json';
		fetch(url)
			.then(response => response.json())
			.then(data => {
        this.setState({data: data })
        // console.log(data.cep + data.logradouro);
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	onSubmit(cepvalue, event) {
		this.loadData(cepvalue, event)
	}
  // onSubmit(cepvalue, event) {
  //   console.log("PESQUISANDO CEP " + cepvalue + "...");
  //   var url = 'https://viacep.com.br/ws/'+cepvalue+'/json';
  //   return fetch(url)
  //  .then((response) => JSON.stringify(response) )
  //  .then((responseJson) => {
  //   //  return responseJson.movies;
  //   // this.setState({data: data })
  //    console.log(JSON.parse(responseJson));
  //  })
  //  .catch((error) => {
  //    console.error(error);
  //  });
  // }

  // onSubmit(cepvalue, event) {
  //   async function getCep() {
  //   try {
  //     console.log("PESQUISANDO CEP " + cepvalue + "...");
  //     var url = 'https://viacep.com.br/ws/'+cepvalue+'/json';
  //     let response = await fetch(url);
  //     let responseJson = await response.json();
  //     // this.state.cep = responseJson.cep;
  //     console.log(responseJson.cep);
  //     return responseJson;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
  // var json = getCep();
  // console.log(json);
  // // this.setState({data: json })
  // }


  render() {
    return (
      <div>
        <Card>
          <Row>
            <Input s={6} type="text" value={this.state.inputVal} onChange={e => this.onChange("inputVal", e)} />
            <Button waves='light' className="right grey darken-2" onClick={e => this.onSubmit(this.state.inputVal, e)}>Buscar</Button>
          </Row>
          {/* {JSON.stringify(this.state)} */}
        </Card>

        <CepResponse    
                logradouro={this.state.data.logradouro}
                bairro={this.state.data.bairro}
                cidade={this.state.data.localidade}
                uf = {this.state.data.uf}
                cep = {this.state.data.cep}
        />
        
      </div>
    );
  }

}

// const CepHome = (props) => (
  
//   <Row>
//     <Col m={8} s={12}>
//         <h5 className="subtitle">Consultar</h5>
        
//         {/* <CepInput /> */}
//         <Card>
//         <Row>
//             {/* <form name="myform"> */}
//             {/* <Input placeholder="Digite o CEP" label="CEP" s={12} value={this.state.cep} name="cepvalue" type="text"/> */}
//             <Input s={6} type="text" value={this.state.inputVal} onChange={e => this.onChange("inputVal", e)} />
//             <Col s={12} m={12}>
//             {/* <Button waves='light' 
//                     className="right grey darken-2" 
//                     //onClick={this.getCep(cepvalue)}
//                     // onClick={(e) => getCep(cepvalue, e)}
//                     type="submit"
//                     form="myform"
//                     >Buscar</Button> */}

//             {/* <input type="button" onClick={this.onSubmit} value="Submit" /> */}
//             </Col>
//             {/* </form> */}
//         </Row>
//         </Card>
//         {JSON.stringify(this.state)}

//         <CepResponse    rua="Rua Teste"
//                 bairro="São Vicente"
//                 cidade="Itajubá"
//         />

//     </Col>
//   </Row>
// );

export default CepApp;