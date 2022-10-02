import React from 'react';
import { View } from 'react-native';

// Componentes
import Header from '../components/home/header'
import Title from '../components/home/title'
import Status from '../components/home/status'
import Intervalo from '../components/home/intervalo';

function Home({ navigation }) {
  return (
    <>
    <Header navigation={ navigation } />
    <Title />
    {/* <View style={{ height: "3px", width: '100%', background: '#ebecf5' }} /> */}
    <Status />
    <Intervalo />
    </>
  );
}

export default Home;
