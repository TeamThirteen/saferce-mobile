import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { MapStyle } from '../../assets/MapStyle';

import ProviderMarker from '../ProviderMarker';
import ProviderCallout from '../ProviderCallout';

import api from '../../services/api';

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MapsProps {
  placeSelected: GeoLocationProps;
}

interface GeometryProps {
  latitude: number;
  longitude: number;
}

interface MarkerProps {
  id: number;
  title: string;
  description: string;
  geometry: GeometryProps;
}

const Maps: React.FC<MapsProps> = ({ placeSelected }) => {
  const [markers, setMarkers] = useState<MarkerProps[]>([]);

  useEffect(() => {
    async function loadMarkersMap(): Promise<void> {
      try {
        const response = await api.get<MarkerProps[]>('providers');

        setMarkers(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadMarkersMap();
  }, []);

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
      maxZoomLevel={20}
      customMapStyle={MapStyle}
    >
      {markers.map((marker) => (
        <Marker key={String(marker.id)} coordinate={marker.geometry}>
          <ProviderMarker provider={marker} />

          <Callout>
            <ProviderCallout provider={marker} />
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

export default Maps;
