// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }


  //============== TEST WORKS=======================
  // constructor(props) {
  //   super(props);
  //   this.state = {inputVal: "", selectVal: "" }
  //   this.onChange = this.onChange.bind(this)
  // }

  // onChange(name, event) {
  //   this.setState({...this.state, [name]: event.target.value})
  // } 

  // render() {
  //   return (
  //     <div className="App">
  //       <Row>
  //         <Input s={6} type="text" value={this.state.inputVal} onChange={e => this.onChange("inputVal", e)} />
  //       </Row>
  //       {JSON.stringify(this.state)}
  //     </div>
  //   );
  // }
  //============== END TEST =======================

}

export default App;