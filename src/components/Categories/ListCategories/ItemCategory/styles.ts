import styled from 'styled-components/native';

export const Container = styled.View`
  height: 140px;
  width: 160px;
  margin-right: 20px;
`;

export const CategoryImage = styled.ImageBackground`
  flex: 1;
  border-radius: 18px;
  overflow: hidden;
  background-color: #fff;
`;

export const CategoryTitle = styled.Text`
  color: #000;
  font-family: 'Poppins-Bold';
  margin-top: 6px;
`;

export const CategorySubTitle = styled.Text`
  color: #f7f7f7;
  font-family: 'Poppins-Regular';
`;