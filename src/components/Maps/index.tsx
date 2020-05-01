import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';

import { MapStyle } from '../../assets/MapStyle';

import Geolocation from '../../services/geolocation';

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Maps: React.FC = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  } as GeoLocationProps);

  useEffect(() => {
    async function loadUserLocation(): Promise<void> {
      try {
        const { coords: coordsLocation } = await Geolocation();
        const { latitude, longitude } = coordsLocation;

        const coords = {
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        };

        setUserLocation(coords);
      } catch (error) {
        throw new Error('Teste');
      }
    }

    loadUserLocation();
  }, []);

  return (
    <MapView
      style={{ flex: 1, width: '100%', height: '100%' }}
      initialRegion={userLocation}
      region={userLocation}
      showsUserLocation
      loadingEnabled
      minZoomLevel={10}
      maxZoomLevel={18}
      customMapStyle={MapStyle}
    />
  );
};

export default Maps;
