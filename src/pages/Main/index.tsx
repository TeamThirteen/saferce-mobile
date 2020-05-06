import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import Maps from '../../components/Maps';
import SearchBar from '../../components/SearchBar';
import ListCategories from '../../components/Categories/ListCategories';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

import Geolocation from '../../services/geolocation';
import api from '../../services/api';

interface CategoriesProps {
  id: number;
  description: string;
  image_url: string;
}

interface GeoLocationProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Main: React.FC = () => {
  const { token } = useAuth();

  const [userLocation] = useState({
    latitude: -22.736997,
    longitude: -47.647893,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  const [categories, setCategories] = useState([] as CategoriesProps[]);
  const [position, setPosition] = useState({} as GeoLocationProps);
  const [showFilterCategory, setShowFilterCategory] = useState(false);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      try {
        const response = await api.get<CategoriesProps[]>('categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadCategories();
  }, [token]);

  const handleCurrentPositionUser = useCallback(async () => {
    try {
      const geoLocationUser = await Geolocation();

      const coordinates = {
        latitude: geoLocationUser.coords.latitude,
        longitude: geoLocationUser.coords.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      };

      setPosition(coordinates);
    } catch (error) {
      Alert.alert('Permissão Negada para Localização');
    }
  }, []);

  const handleShowCategoriesFilter = useCallback(() => {
    setShowFilterCategory(!showFilterCategory);
  }, [showFilterCategory]);

  const handleLocationMap = useCallback((data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    const placeSelected = {
      latitude,
      longitude,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    };

    setPosition(placeSelected);
  }, []);

  const handleProviderByCategory = useCallback((categoryId) => {
    setFilterCategory(categoryId);
  }, []);

  const handleChangeRegion = useCallback((newPosition) => {
    setPosition(newPosition);
  }, []);

  return (
    <Container>
      {position && (
        <Maps
          placeSelected={userLocation}
          position={position}
          category={filterCategory}
          handleCurrentPositionUser={handleCurrentPositionUser}
          handleChangeRegion={handleChangeRegion}
        />
      )}

      <SearchBar
        onLocationSelect={handleLocationMap}
        onShowCategoriesFilter={handleShowCategoriesFilter}
      />

      {showFilterCategory && (
        <ListCategories
          onShowCategoriesFilter={handleShowCategoriesFilter}
          handleProviderByCategory={handleProviderByCategory}
          categories={categories}
        />
      )}
    </Container>
  );
};

export default Main;
