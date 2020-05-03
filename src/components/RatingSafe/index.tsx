import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container } from './styles';

interface RatingSafeProps {
  rating: number;
}

const RatingSafe: React.FC<RatingSafeProps> = ({ rating }) => {
  const handleRating = useCallback(() => {
    const ratings = [];

    for (let i = 1; i <= 5; i++) {
      ratings.push(
        <Icon
          key={String(i)}
          name="star"
          solid
          size={25}
          color={rating < i ? '#FFFFFF' : '#f6d186'}
        />,
      );
    }

    return ratings;
  }, []);

  return <Container>{handleRating()}</Container>;
};

export default RatingSafe;
