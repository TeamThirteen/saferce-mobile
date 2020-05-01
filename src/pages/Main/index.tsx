import React, { useState, useEffect, useCallback } from 'react';

import Maps from '../../components/Maps';
import SearchBar from '../../components/SearchBar';

import { Container } from './styles';

import Geolocation from '../../services/geolocation';

const Main: React.FC = () => {
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  useEffect(() => {
    async function loadUserLocation(): Promise<void> {
      try {
        const {
          coords: { latitude, longitude },
        } = await Geolocation();

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

  const handleLocationMap = useCallback((data, { geometry }) => {
    console.log(data);
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    const placeSelected = {
      latitude,
      longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    };

    setUserLocation(placeSelected);
  }, []);

  return (
    <Container>
      <Maps placeSelected={userLocation} />
      <SearchBar onLocationSelect={handleLocationMap} />
    </Container>
  );
};

export default Main;
