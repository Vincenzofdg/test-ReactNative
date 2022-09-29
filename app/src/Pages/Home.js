import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { Nav, Title, Btn, TitleBtn } from '../css/Home';

function Home() {
  const { test } = useContext(MyContext);
  return (
    <>
    <Nav>
      <Title>Olá, seja bem vindo</Title>
      <Btn accessibilityLabel="Status"><TitleBtn>Status</TitleBtn></Btn>
    </Nav>
    <Title>{ test }</Title>
    </>
  );
}

export default Home;