import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {

  const [ test, setTest ] = useState('Ola Mundo');

  const obj = {
    test, setTest
  };
  
  return(
    <MyContext.Provider value={ obj }>
      {children}
    </MyContext.Provider>
    );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
