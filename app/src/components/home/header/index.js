import React from 'react';
import * as style from './style';

import { getAll, getById } from '../../../services/api';

function Header() {
  const testDB = async () => {
    const t = await getById(1111);
    console.log(t)
  }

  return (
    <>
    <style.Container>
      <style.Greetings>Olá, seja bem vindo</style.Greetings>
      <style.Btn accessibilityLabel="Status">
        <style.BtnText onPress={ () => {testDB()} }>Status</style.BtnText>
      </style.Btn>
    </style.Container>
    </>
  );
}

export default Header;
