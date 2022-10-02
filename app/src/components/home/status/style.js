import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  margin: 15px 20px 0px 20px;
`;

export const Title = styled.View`
  width: 60%;
  height: 70px;
`;

export const Text = styled.Text`
  color: #666769;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
`;

export const Status = styled.Text`
  color: gray;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  font-style: italic;
`;
