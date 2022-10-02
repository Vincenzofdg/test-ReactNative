import React from 'react';
import { Button } from 'react-native';

// Componentes
import Header from '../components/status/header'
import Pacote from '../components/status/pacote'

function Status({ navigation }) {
  return (
    <>
    <Header navigation={ navigation } />
    <Pacote />
    </>
  );
}

export default Status;
