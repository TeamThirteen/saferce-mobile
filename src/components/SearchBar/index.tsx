import React from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Theme from '../../theme';

interface SearchBarProps {
  onLocationSelect(data: object, details: object): void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="O que você está procurando..."
      placeholderTextColor={Theme.color.secondary}
      returnKeyType="search"
      keyboardAppearance="light"
      enablePoweredByContainer={false}
      fetchDetails
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      onPress={onLocationSelect}
      query={{
        key: 'AIzaSyDNHHDNMnMlnqRt7QdmmVGjKcRBE2QD-78',
        language: 'pt',
      }}
      styles={{
        container: {
          position: 'absolute',
          backgroundColor: 'transparent',
          marginHorizontal: 0,
          width: '100%',
          top: Platform.select({ ios: 60, android: 40 }),
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 55,
          marginRight: 15,
          marginLeft: 60,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: 55,
          margin: 0,
          borderRadius: 4,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#DDD',
          fontSize: 16,
        },
        listView: {
          marginLeft: 20,
          marginRight: 60,
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          elevation: 5,
          borderWidth: 1,
          borderColor: '#DDD',
          backgroundColor: '#FFF',
          marginTop: 10,
        },
        description: {
          fontSize: 16,
        },
        row: {
          padding: 20,
          height: 58,
        },
      }}
    />
  );
};

export default SearchBar;
