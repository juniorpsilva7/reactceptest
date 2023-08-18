// Importando o React
import React, { Component } from 'react';
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button, RaisedButton } from 'react-materialize';
// Importando o component CepResponse
import CepResponse from '../cep/cepresponse'
// Import do Google Map React
import GoogleMapReact, { Marker} from 'google-map-react';
 

const AnyReactComponent = ({  img_src }) => <div><img src={img_src} height="50" style={{}} /></div>;

class CepApp extends Component {

  constructor(props) {
    super(props);
    this.state = {inputVal: "02050010", data: [], lat:0, lng:0, center:{lat:0, lng:0}, zoom:18, markers:[], alert:""}
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
		})
      .catch(err => {
          console.error(this.props.url, err.toString());
          this.setState({alert: "CEP Errado"});
      })
    
    // GET latitude and Longitude info
    var keyGmap = '<<GMAP_KEY>>';
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+cepvalue+'&key='+keyGmap;
		fetch(url)
			.then(response => response.json())
			.then(data => {
        this.setState({lat: data.results[0].geometry.location.lat , lng: data.results[0].geometry.location.lng});
        var centerPosition = {};
        centerPosition.lat = data.results[0].geometry.location.lat;
        centerPosition.lng = data.results[0].geometry.location.lng;
        console.log(centerPosition);
        this.setState({center: centerPosition});
        this.setState({
          markers: [{lat: centerPosition.lat.lat, lng: centerPosition.lng, img_src: 'marker2.png'}],
        });
        this.setState({alert: ""});
        // console.log(data.results[0].geometry.location.lat);
        // console.log(data.results[0].geometry.location.lng);
		})
      .catch(err => {
        console.error(this.props.url, err.toString());
        
      });

  }
  
	onSubmit(cepvalue, event) {
		this.loadData(cepvalue, event)
  }
  
  render() {
    return (
      <div>
        <Card>
          <Row>
            <Input s={6} type="number" value={this.state.inputVal} onChange={e => this.onChange("inputVal", e)} />
            <Button waves='light' className="right grey darken-2" onClick={e => this.onSubmit(this.state.inputVal, e)}>Buscar</Button>
          </Row>
          <span className="red-text">{this.state.alert}</span>
          {/* {JSON.stringify(this.state)} */}
        </Card>

        <Card>
        <CepResponse    
                logradouro={this.state.data.logradouro}
                bairro={this.state.data.bairro}
                cidade={this.state.data.localidade}
                uf = {this.state.data.uf}
                cep = {this.state.data.cep}
        />

        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '<<GMAP_KEY>>' }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
        >
        {this.state.markers.map((marker) =>{
              return(
                <AnyReactComponent
                  lat={this.state.center.lat}
                  lng={this.state.center.lng}
                  img_src={marker.img_src}
                />

              )
            })}
        </GoogleMapReact>
      </div>

      </Card>
        
      </div>
    );
  }

}

export default CepApp;
