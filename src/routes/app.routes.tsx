import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Provider from '../pages/Provider';

import Theme from '../theme';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: Theme.color.primary,
      },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Provider" component={Provider} />
  </App.Navigator>
);

export default AppRoutes;
