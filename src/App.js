import './App.scss';
import Header from './components/header/header';
import Bottom from './components/bottom/bottom'
import { RoutersContainer } from './components/routers/routers_container'
import React from 'react';
import OsTester from './components/os_tester/os_tester';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <OsTester />
      <Bottom/>
    </div>
  )
}

export default App;
