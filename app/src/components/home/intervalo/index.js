import React, { useContext } from 'react';
import Context from '../../../context/MyContext';
import * as style from './style';

function Intervalo() {
  const { setIntervalo } = useContext(Context);
  const seconds = [10, 5, 3, 1];

  const timers = (sec) => {
    return(
      <style.Btn onPress={ () => setIntervalo(sec) } key={ sec } accessibilityLabel={`${ sec } segundos`}>
        <style.Text>{ `${ sec == 10 ? sec : `0${sec}` }s` }</style.Text>
      </style.Btn>
    )
  };
  return (
    <>
    <style.Container>
      <style.Title>Intervalo de comunicação</style.Title>
      <style.Timers>
        {seconds.map((second) => timers(second))}
      </style.Timers>
    </style.Container>
    </>
  );
}

export default Intervalo;