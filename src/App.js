import './App.css';
import Header from './components/header';
import MainForm from './components/main_form/main_form';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <MainForm/>
    </div>
  );
}

export default App;
