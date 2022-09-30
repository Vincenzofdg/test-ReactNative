import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [ status, setStatus ] = useState(['red', 'Offline', 'Inativo']);

  const obj = {
    status, setStatus,
  };
  
  return(
    <MyContext.Provider value={ obj }>
      {children}
    </MyContext.Provider>
    );
}

export default MyProvider;
