import React from 'react';
import MapView from 'react-native-maps';

import { MapStyle } from '../../assets/MapStyle';

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MapsProps {
  placeSelected: GeoLocationProps;
}

const Maps: React.FC<MapsProps> = ({ placeSelected }) => {
  return (
    <MapView
      style={{ flex: 1, width: '100%', height: '100%' }}
      initialRegion={placeSelected}
      region={placeSelected}
      showsUserLocation
      showsMyLocationButton={false}
      loadingEnabled
      minZoomLevel={10}
      maxZoomLevel={18}
      customMapStyle={MapStyle}
    />
  );
};

export default Maps;
