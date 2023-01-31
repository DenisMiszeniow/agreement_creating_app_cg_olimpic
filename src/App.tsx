import React, { FC } from 'react';

import './App.scss';
//@ts-ignore
import Bottom from './components/bottom/bottom.tsx'
//@ts-ignore
import { HeaderContainer } from './components/header/header_container.ts';
//@ts-ignore
import { OsTesterContainer } from './components/os_tester/os_tester_container.ts';
//@ts-ignore
import { RoutersContainer } from './components/routers/routers_container.ts';

const App: FC = () => {
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
