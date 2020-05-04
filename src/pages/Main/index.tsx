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

const Main: React.FC = () => {
  const { token } = useAuth();

  const [userLocation, setUserLocation] = useState({
    latitude: -22.736997,
    longitude: -47.647893,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  const [categories, setCategories] = useState([] as CategoriesProps[]);
  const [showFilterCategory, setShowFilterCategory] = useState(false);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    async function loadUserLocation(): Promise<void> {
      try {
        const position = await Geolocation();

        const coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        };

        setUserLocation(coordinates);
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

    loadUserLocation();
    loadCategories();
  }, [token]);

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

    setUserLocation(placeSelected);
  }, []);

  const handleShowCategoriesFilter = useCallback(() => {
    setShowFilterCategory(!showFilterCategory);
  }, [showFilterCategory]);

  const handleProviderByCategory = useCallback((categoryId) => {
    setFilterCategory(categoryId);
  }, []);

  return (
    <Container>
      <Maps placeSelected={userLocation} category={filterCategory} />

      <SearchBar
        onLocationSelect={handleLocationMap}
        onShowCategoriesFilter={handleShowCategoriesFilter}
      />

      {showFilterCategory && (
        <ListCategories
          handleProviderByCategory={handleProviderByCategory}
          categories={categories}
        />
      )}
    </Container>
  );
};

export default Main;
