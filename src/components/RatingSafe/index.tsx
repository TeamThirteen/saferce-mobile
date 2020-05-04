import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, SafeTitle, StarsRating } from './styles';

interface RatingSafeProps {
  rating: number;
  size?: number;
  preview?: boolean;
}

const RatingSafe: React.FC<RatingSafeProps> = ({
  rating,
  size = 25,
  preview = false,
}) => {
  const handleRating = useCallback(() => {
    const ratings = [];

    for (let i = 1; i <= 5; i++) {
      ratings.push(
        <Icon
          key={String(i)}
          name="star"
          solid
          size={size}
          color={rating < i ? '#FFFFFF' : '#f6d186'}
        />,
      );
    }

    return ratings;
  }, [rating, size]);

  return (
    <Container preview={preview}>
      <StarsRating>{handleRating()}</StarsRating>

      {!preview && <SafeTitle>SAFES</SafeTitle>}
    </Container>
  );
};

export default RatingSafe;
