import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {

  const [ projectIndex, setProjectIndex ] = useState(0);

  const obj = {
    projectIndex, setProjectIndex
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
