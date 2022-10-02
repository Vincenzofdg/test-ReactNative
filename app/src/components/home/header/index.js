import React from 'react';
import * as style from './style';

function Header(prop) {
  const toStatus = () => prop.navigation.navigate('Status');
  return (
    <>
    <style.Container>
      <style.Greetings>Olá, seja bem vindo</style.Greetings>
      <style.Btn accessibilityLabel="Status"  onPress={ () => toStatus()}>
        <style.BtnText>Status</style.BtnText>
      </style.Btn>
    </style.Container>
    </>
  );
}

export default Header;
