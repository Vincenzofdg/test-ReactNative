import styled from 'styled-components/native';

export const Container = styled.View`
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  // border-bottom: 6px solid black;
`;

export const Image = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Info = styled.View`
  width: 200px;
  height: 75px
  margin-left: 15px;
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: black;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;

`;

export const State = styled.Text`
  color: gray;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  font-style: italic;
`;
