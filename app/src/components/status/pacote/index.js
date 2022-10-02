import React, { useContext, useState, useEffect } from 'react';
import Context from '../../../context/MyContext';
import { getAll } from '../../../services/api';
import * as style from './style';

function Intervalo() {
  const { setIntervalo, api } = useContext(Context);
  
  const card = (p) => {
    return(
      <>
      <style.Title key={ p }>
        <style.Text>{ `Pacote ID: ${p}` } </style.Text>
        <style.Status>{ `Serviço ${'Sincronizado'}` }</style.Status>
      </style.Title>
      </>
    )
  }

  return (
    <>
    <style.Container>
      { api.map((i) => card(i))}
    </style.Container>
    </>
  );
}

export default Intervalo;