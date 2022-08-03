import './App.css';
import Header from './components/header';
import { MainFormContainer } from './components/main_form_container';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <MainFormContainer/>
    </div>
  );
}

export default App;
