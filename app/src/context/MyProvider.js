import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ status, setStatus ] = useState(['red', 'Offline', 'Inativo']);
  const [ intervalo, setIntervalo ] = useState(10)

  const obj = {
    status, setStatus,
    intervalo, setIntervalo,
  };
  
  return(
    <MyContext.Provider value={ obj }>
      {children}
    </MyContext.Provider>
    );
}

export default MyProvider;
