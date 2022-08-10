import './App.css';
import Header from './components/header';
import MainForm from './components/main_form/main_form';
import Bottom from './components/bottom'
import { AgreementReadyContainer } from './components/agreement_ready/agreement_ready_container';
import { Route, Routes } from 'react-router-dom';
import { Step3Container } from './components/downloading/step_3_container';
import { SendingContainer } from './components/sending/sending_container';
import EndPage from './components/end_page/end_page';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<MainForm/>}/>
          <Route path='/agreement' element={<AgreementReadyContainer/>}/>
          <Route path='/download' element={<Step3Container/>}/>
          <Route path="/sending" element={<SendingContainer/>}/>
          <Route path="/end" element={<EndPage/>}/>
        </Routes>
      </div>
      <Bottom/>
    </div>
  );
}

export default App;
