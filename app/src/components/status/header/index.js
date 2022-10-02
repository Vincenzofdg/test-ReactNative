import React from 'react';
import * as style from './style';

function Header(prop) {
  const toHome = () => prop.navigation.goBack();

  return (
    <>
    <style.Container>
      <style.Btn accessibilityLabel="Voltar"  onPress={ () => toHome()}>
        <style.BtnText>Voltar</style.BtnText>
      </style.Btn>
      <style.Greetings>Status</style.Greetings>
    </style.Container>
    </>
  );
}

export default Header;
