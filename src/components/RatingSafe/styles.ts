import styled, { css } from 'styled-components/native';

interface ContainerProps {
  preview: boolean;
}

export const Container = styled.View<ContainerProps>`
  ${(props) =>
    !props.preview
      ? css`
          bottom: 10px;
          left: 20px;
          position: absolute;
        `
      : css``}
`;

export const StarsRating = styled.View`
  flex-direction: row;
`;

export const SafeTitle = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #ffffff;
  margin-top: 5px;
  letter-spacing: 2px;
`;
