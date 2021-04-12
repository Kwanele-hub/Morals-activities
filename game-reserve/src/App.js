import './App.css';
import Header from './components/Header';
import Rhinos from './components/Rhinos';
import Lions from './components/Lions';
import RestartButton from './components/RestartButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <Header />
  <RestartButton />
      </header>
      <aside>
      <div>
      <Rhinos />
      <Lions/>
      </div>
      </aside>
    </div>
  );
}

export default App;
