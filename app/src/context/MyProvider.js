import React, { useState, useEffect } from 'react';
import { add, getAll } from '../services/api';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ status, setStatus ] = useState(['red', 'Offline', 'Inativo']);
  const [ intervalo, setIntervalo ] = useState(10)
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function request() {
      const result = await getAll();
      setApi(result.keys);
      console.log(result.keys)
    }
    request();
  }, []);

  const obj = {
    status, setStatus,
    intervalo, setIntervalo,
    api,
  };
  
  return(
    <MyContext.Provider value={ obj }>
      {children}
    </MyContext.Provider>
    );
}

export default MyProvider;
