import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  title: 'Localização'
  });
  return marker;
 };


 return (
   <div style={{ height: '100%', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBVlnRk437w99x16MJh9hY6ha0RRpBIpo0' }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default GoogleMaps;