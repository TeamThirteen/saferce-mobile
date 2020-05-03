import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
});

const getUserCurrentPosition = (): Promise<GeolocationResponse> => {
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

export default getUserCurrentPosition;
