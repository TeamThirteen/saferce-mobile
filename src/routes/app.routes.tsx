import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}
  >
    <App.Screen name="Página Inicial" component={Main} />
  </App.Navigator>
);

export default AppRoutes;
