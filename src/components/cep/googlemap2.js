import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap2 extends Component {

  constructor(props) {
    super(props);
        this.state = {center:{lat:-22.428698, lng:-45.455358}, zoom: 17}
        console.log(props.lat);
    }

  // static defaultProps = {
  //   center: {
  //     lat: -22.428698,
  //     lng: -45.455358
  //   },
  //   zoom: 18
  // };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQqPxeKMk8T6I4JOE7P315cSXb13fNbFM' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'TO AQUI!!!'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap2;