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
      style={{ flex: 1 }}
      initialRegion={placeSelected}
      region={placeSelected}
      showsUserLocation={false}
      showsPointsOfInterest={false}
      showsCompass={false}
      loadingEnabled
      minZoomLevel={10}
      maxZoomLevel={18}
      customMapStyle={MapStyle}
    />
  );
};

export default Maps;
