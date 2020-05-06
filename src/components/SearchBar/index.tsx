import React, { useState } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Categories from '../Categories';
import Profile from '../Profile';

import Theme from '../../theme';

interface SearchBarProps {
  onLocationSelect(data: object, details: object): void;
  onShowCategoriesFilter(): void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onLocationSelect,
  onShowCategoriesFilter,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Onde você está..."
      placeholderTextColor={Theme.color.secondary}
      returnKeyType="search"
      keyboardAppearance="light"
      enablePoweredByContainer={false}
      fetchDetails
      renderLeftButton={() => (
        <Categories onShowCategoriesFilter={onShowCategoriesFilter} />
      )}
      renderRightButton={() => <Profile />}
      textInputProps={{
        onFocus: () => {
          setIsFocused(true);
          onShowCategoriesFilter();
        },
        onBlur: () => {
          setIsFocused(false);
        },
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      listViewDisplayed={isFocused}
      onPress={onLocationSelect}
      query={{
        key: 'AIzaSyDNHHDNMnMlnqRt7QdmmVGjKcRBE2QD-78',
        language: 'pt',
      }}
      filterReverseGeocodingByTypes={[
        'locality',
        'administrative_area_level_3',
      ]}
      styles={{
        container: {
          position: 'absolute',
          backgroundColor: 'transparent',
          marginHorizontal: '5%',
          width: '90%',
          top: Platform.select({ ios: 60, android: 40 }),
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 55,
          marginRight: 0,
          marginLeft: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          elevation: 5,
        },
        textInput: {
          height: 55,
          margin: 0,
          borderRadius: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          fontSize: 14,
          fontFamily: 'RobotoSlab-Regular',
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderWidth: 0,
        },
        listView: {
          marginLeft: 0,
          marginRight: 0,
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          elevation: 5,
          borderWidth: 1,
          borderColor: '#DDD',
          backgroundColor: '#FFF',
          marginTop: 8,
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
