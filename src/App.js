import './App.scss';
import Header from './components/header/header';
import Bottom from './components/bottom/bottom'

import React from 'react';
import OsTester from './components/os_tester/os_tester';
import { HeaderContainer } from './components/header/header_container';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <OsTester />
      <Bottom/>
    </div>
  )
}

export default App;
