import React, { useEffect, useState, useCallback } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { MapStyle } from '../../assets/MapStyle';

import ProviderMarker from '../ProviderMarker';
import ProviderCallout from '../ProviderCallout';
import PositionUser from '../PositionUser';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface MapsProps {
  position: GeoLocationProps;
  category: number | null;
  handleLocationUserClick(newPosition: object): void;
}

interface CategoryProps {
  id: number;
  description: string;
  image_url: string;
}

interface MarkerProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: CategoryProps;
  latitude: number;
  longitude: number;
  rating: number;
}

const Maps: React.FC<MapsProps> = ({
  position,
  handleLocationUserClick,
  category = null,
}) => {
  const { token } = useAuth();
  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadMarkersMap(): Promise<void> {
      try {
        const response = await api.get<MarkerProps[]>('providers', {
          params: {
            category,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMarkers(response.data);
      } catch (error) {
        Alert.alert('Ooops!', 'Aconteceu um erro, tente novamente mais tarde.');
      }
    }

    loadMarkersMap();
  }, [token, category]);

  const handleCalloutProvider = useCallback(
    (id: number): void => {
      navigation.navigate('Provider', {
        id,
      });
    },
    [navigation],
  );

  return position.latitude ? (
    <MapView
      style={{ flex: 1 }}
      region={position}
      showsPointsOfInterest={false}
      showsCompass={false}
      showsMyLocationButton={false}
      onPress={handleLocationUserClick}
      loadingEnabled
      minZoomLevel={10}
      maxZoomLevel={20}
      customMapStyle={MapStyle}
    >
      <Marker key="position-user" coordinate={position}>
        <PositionUser />
      </Marker>

      {markers.map((marker) => (
        <Marker
          key={String(marker.id)}
          coordinate={{
            latitude: Number(marker.latitude),
            longitude: Number(marker.longitude),
          }}
        >
          <ProviderMarker provider={marker} />

          <Callout tooltip onPress={() => handleCalloutProvider(marker.id)}>
            <ProviderCallout provider={marker} />
          </Callout>
        </Marker>
      ))}
    </MapView>
  ) : (
    <ActivityIndicator color="#000000" />
  );
};

export default Maps;
