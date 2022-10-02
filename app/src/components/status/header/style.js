import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1c1a83;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.TouchableHighlight`
  margin-left: 25px;
  color: white;
`;

export const BtnText = styled.Text`
  color: white;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`;

export const Greetings = styled.Text`
  margin-right: 45%;
  color: white;

  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`;

