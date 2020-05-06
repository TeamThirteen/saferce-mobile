import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
});

const callLocation = (): Promise<GeoPosition> => {
  return new Promise((resolve) => {
    Geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (err) =>
        Alert.alert(
          'Permissão Negada',
          `${err.code},${err.message} Não foi possível obter a localização`,
        ),
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 20000,
      },
    );
  });
};

const getWatchPosition = (): Promise<GeoPosition> => {
  return new Promise((resolve) => {
    Geolocation.watchPosition(
      (position) => {
        resolve(position);
      },
      () =>
        Alert.alert('Permissão Negada', 'Não foi possível obter a localização'),
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 20000,
      },
    );
  });
};

async function requestLocationPermission(): Promise<GeoPosition> {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Sua localização foi solicitada',
      message: 'Esse aplicativo precisa de sua localização',
      buttonPositive: 'Habilitar',
    },
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    const response = await callLocation();

    return response;
  }

  return {
    coords: {
      latitude: 0,
      longitude: 0,
      altitude: 0,
      accuracy: 0,
      altitudeAccuracy: 0,
      heading: 0,
      speed: 0,
    },
    timestamp: 0,
  };
}

const getUserCurrentPosition = async (): Promise<GeoPosition> => {
  if (Platform.OS === 'ios') {
    return callLocation();
  }

  const response = await requestLocationPermission();
  return response;
};

export { getUserCurrentPosition, getWatchPosition };
