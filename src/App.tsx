import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import Theme from './theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.color.secondary}
        translucent
      />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
