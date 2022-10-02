import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import Context from '../../../context/MyContext';
import * as style from './style';

function Home() {
  const { status, setStatus } = useContext(Context);
  const [isEnabled, setIsEnabled] = useState(false);

  const switchBtn = () => {
    setIsEnabled(previousState => !previousState);
    if (status[1] === 'Online') setStatus(['red', 'Offline', 'Inativo'])
    else setStatus(['#66d260', 'Online', 'Ativo'])
  };

  return (
    <>
    <style.Container>
      <style.Title>
        <style.Text>Status do serviço</style.Text>
        <style.Status>{ `Serviço ${status[2]}` }</style.Status>
      </style.Title>
      <Switch
        trackColor={{ false: "#767577", true: "#e4e3eb" }}
        thumbColor={ isEnabled ? "#0dbc01" : "#f4f3f4" }
        ios_backgroundColor="#3e3e3e"
        onValueChange={ switchBtn }
        value={ isEnabled }
      />
    </style.Container>
    </>
  );
}

export default Home;
