import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, SafeTitle, StarsRating } from './styles';

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
  }, [rating]);

  return (
    <Container>
      <StarsRating>{handleRating()}</StarsRating>

      <SafeTitle>SAFES</SafeTitle>
    </Container>
  );
};

export default RatingSafe;
