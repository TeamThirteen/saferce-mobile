import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
});

const callLocation = (): Promise<GeolocationResponse> => {
  return new Promise((resolve) => {
    Geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      () => ({}),
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 20000,
      },
    );
  });
};

async function requestLocationPermission(): Promise<GeolocationResponse> {
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

const getUserCurrentPosition = async (): Promise<GeolocationResponse> => {
  if (Platform.OS === 'ios') {
    return callLocation();
  }

  const response = await requestLocationPermission();
  return response;
};

export default getUserCurrentPosition;
