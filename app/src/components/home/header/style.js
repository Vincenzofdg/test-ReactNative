import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 50px
  background: #1c1a83;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Greetings = styled.Text`
  margin-left: 25px;
  color: white;

  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`;

export const Btn = styled.TouchableHighlight`
  margin-right: 25px;
  color: white;
`;

export const BtnText = styled.Text`
  color: white;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`;
