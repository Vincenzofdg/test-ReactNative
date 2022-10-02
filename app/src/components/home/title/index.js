import React, { useContext } from 'react';
import Context from '../../../context/MyContext';
import * as style from './style';
import GPS from '../../../imgs/gps.png'

function Title() {
  const { status } = useContext(Context);
  
  return (
    <>
    <style.Container>
      <style.Image source={ GPS } />
      <style.Info>
        <style.Title>My GPS- Tracking</style.Title>
        <style.State style={{ color: status[0] }}>{ status[1] }</style.State>
      </style.Info>
    </style.Container>
    </>
  );
}

export default Title;
