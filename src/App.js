import './App.scss';
import Header from './components/header/header';

import Bottom from './components/bottom/bottom'

import { RoutersContainer } from './components/routers/routers_container'

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className='content-container'>
        <RoutersContainer />
      </div>
      <Bottom/>
    </div>
  );
}

export default App;
