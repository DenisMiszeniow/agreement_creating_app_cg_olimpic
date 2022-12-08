import './App.scss';
import Header from './components/header/header';
import Bottom from './components/bottom/bottom'

import React from 'react';
import { HeaderContainer } from './components/header/header_container';
import { OsTesterContainer } from './components/os_tester/os_tester_container';
import { RoutersContainer } from './components/routers/routers_container';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer/>
      {(navigator.appVersion.indexOf('iPhone') !== -1) || (navigator.appVersion.indexOf('iPad') !== -1)
      ? <OsTesterContainer />
      : <RoutersContainer />}
      <Bottom/>
    </div>
  )
}

export default App;
