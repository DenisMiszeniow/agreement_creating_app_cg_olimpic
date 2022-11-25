import './App.scss';
import Header from './components/header/header';
import Bottom from './components/bottom/bottom'

import React from 'react';
import { HeaderContainer } from './components/header/header_container';
import { OsTesterContainer } from './components/os_tester/os_tester_container';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      <OsTesterContainer />
      <Bottom/>
    </div>
  )
}

export default App;
