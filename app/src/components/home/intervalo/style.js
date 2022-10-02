import styled from 'styled-components/native';

export const Container = styled.View`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 0px 15px;
`;

export const Title = styled.Text`
  color: #666769;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
`;

export const Timers = styled.View`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-left: -15px;
`;

export const Btn = styled.TouchableHighlight`
  background: #ecf4f2;
  width: 70px;
  height: 60px;
  border: 2px solid #7dd777;
  border-radius: 6px;
`;

export const Text = styled.Text`
  color: black;
  font-family: 'Roboto';
  font-weight: 650;
  font-size: 18px;

  position: absolute;
  top: 25%;
  left: 25%;
`;