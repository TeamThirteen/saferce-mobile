import { PermissionsAndroid, Platform, Alert, AlertType } from 'react-native';
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
        timeout: 100,
        maximumAge: 0,
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
}

const getUserCurrentPosition = async (): Promise<GeolocationResponse> => {
  if (Platform.OS === 'ios') {
    callLocation();
  } else {
    const response = await requestLocationPermission();
    return response;
  }
};

export default getUserCurrentPosition;
