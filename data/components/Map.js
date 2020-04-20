import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 50.8494905,
      lng: -1.0566019
    },
    zoom: 16,
    styles: []
  }

  render() {
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBK5bt7uP_vjh0yir3mJ2TX5tjEi1JDnAw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map
