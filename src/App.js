
import React from 'react';
import { Grommet, } from 'grommet';
import Home from './components/Home'
import { Route, Switch, } from 'react-router-dom';

const App = () => (
  <Grommet theme={theme} full>
    <Home />
  </Grommet>
)

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


export default App