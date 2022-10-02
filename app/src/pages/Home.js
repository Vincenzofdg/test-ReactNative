import React, { useContext, useState } from 'react';
import { Switch, Button } from 'react-native';
import MyContext from '../context/MyContext';
import * as style from '../css/Home';

// Image
import Icon from '../css/imgs/gps.png'
import getAll from '../services/GET';


function Home() {
  const { status, setStatus } = useContext(MyContext);
  const [isEnabled, setIsEnabled] = useState(false);

  const switchBtn = () => {
    setIsEnabled(previousState => !previousState);
    if (status[1] === 'Online') setStatus(['red', 'Offline', 'Inativo'])
    else setStatus(['#66d260', 'Online', 'Ativo'])
  };

  const testDB = async () => {
    const t = await getAll();
    console.log(t)
  }

  return (
    <>
    <style.Nav>
      <style.Title>Olá, seja bem vindo</style.Title>
      <style.Btn accessibilityLabel="Status">
        <style.TitleBtn onPress={ () => {testDB()} }>Status</style.TitleBtn>
      </style.Btn>
    </style.Nav>

    <style.Status>
      <style.Image source={ Icon } />

      <style.Info>
        <style.InfoTitle>My GPS- Tracking</style.InfoTitle>
        <style.State style={{ color: status[0] }}>{ status[1] }</style.State>
      </style.Info>
    </style.Status>
    
    <style.Division />

    <style.Switch>
      <style.SwitchText>
        <style.SwitchTitle>Status do serviço</style.SwitchTitle>
        <style.SwitchStatus>{ `Serviço ${status[2]}` }</style.SwitchStatus>
      </style.SwitchText>
      <Switch
        trackColor={{ false: "#767577", true: "#e4e3eb" }}
        thumbColor={ isEnabled ? "#0dbc01" : "#f4f3f4" }
        ios_backgroundColor="#3e3e3e"
        onValueChange={ switchBtn }
        value={ isEnabled }
      />
    </style.Switch>

    <style.Timer>
      <style.SwitchTitle>Intervalo de comunicação</style.SwitchTitle>
      <style.Timers>

      <style.TimerBtn accessibilityLabel="10 segundos">
        <style.TimerText>10s</style.TimerText>
      </style.TimerBtn>

      <style.TimerBtn accessibilityLabel="05 segundos">
        <style.TimerText>05s</style.TimerText>
      </style.TimerBtn>

      <style.TimerBtn accessibilityLabel="03 segundos">
        <style.TimerText>03s</style.TimerText>
      </style.TimerBtn>

      <style.TimerBtn accessibilityLabel="01 segundos">
        <style.TimerText>01s</style.TimerText>
      </style.TimerBtn>

      </style.Timers>
    </style.Timer>
    </>
  );
}

export default Home;
