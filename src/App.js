import './App.css';
import Header from './components/header';
import MainForm from './components/main_form/main_form';
import Bottom from './components/bottom'
import { AgreementReadyContainer } from './components/agreement_ready/agreement_ready_container';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className='content-container'>
        <MainForm/>
        <AgreementReadyContainer/>
      </div>
      <Bottom/>
    </div>
  );
}

export default App;
