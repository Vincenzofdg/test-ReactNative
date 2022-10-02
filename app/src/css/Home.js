import styled from 'styled-components/native';

// --------------------

export const Nav = styled.View`
  margin-top: 50px
  background: #1c1a83;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
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

export const TitleBtn = styled.Text`
  color: white;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
`;

// --------------------

export const Status = styled.View`
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

export const InfoTitle = styled.Text`
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

// --------------------

export const Division = styled.View`
  height: 3px;
  width: 100%;
  background: #ebecf5;
`;

// --------------------

export const Switch = styled.View`
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  margin: 15px 20px 0px 20px;
`;

export const SwitchText = styled.View`
  width: 60%;
  height: 70px;
`;

export const SwitchTitle = styled.Text`
  color: #666769;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 18px;
`;

export const SwitchStatus = styled.Text`
  color: gray;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  font-style: italic;
`;

// --------------------

export const Timer = styled.View`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 0px 15px;
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

export const TimerBtn = styled.TouchableHighlight`
  background: #ecf4f2;
  width: 70px;
  height: 60px;
  border: 2px solid #7dd777;
  border-radius: 6px;
`;

export const TimerText = styled.Text`
  color: black;
  font-family: 'Roboto';
  font-weight: 650;
  font-size: 18px;

  position: absolute;
  top: 25%;
  left: 25%;
`;