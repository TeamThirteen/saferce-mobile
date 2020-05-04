import styled from 'styled-components/native';

interface InformationProps {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Information = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 50px;
  margin-bottom: 8px;
`;

export const InformationDescription = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

export const InformationIcon = styled.View<InformationProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color ?? '#c7c7c7'};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const InformationText = styled.Text`
  font-size: 13px;
  font-family: 'RobotoSlab-Medium';
`;

export const InformationValue = styled.Text`
  font-size: 16px;
  margin-top: -3px;
  font-family: 'RobotoSlab-Regular';
  color: #666666;
`;
