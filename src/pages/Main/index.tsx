import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import Maps from '../../components/Maps';
import SearchBar from '../../components/SearchBar';
import ListCategories from '../../components/Categories/ListCategories';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

import { getUserCurrentPosition } from '../../services/geolocation';
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

  const [categories, setCategories] = useState([] as CategoriesProps[]);
  const [position, setPosition] = useState({
    latitude: -22.736997,
    longitude: -47.647893,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  } as GeoLocationProps);
  const [showFilterCategory, setShowFilterCategory] = useState(false);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    async function handleCurrentPositionUser(): Promise<void> {
      try {
        const geoLocationUser = await getUserCurrentPosition();

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
    }

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

    handleCurrentPositionUser();
    loadCategories();
  }, [token]);

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

  return (
    <Container>
      {position && <Maps position={position} category={filterCategory} />}

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
