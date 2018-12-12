import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -22.428698,
      lng: -45.455358
    },
    zoom: 18
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQqPxeKMk8T6I4JOE7P315cSXb13fNbFM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={-22.428698}
            lng={-45.455358}
            text={'TO AQUI!!!'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;