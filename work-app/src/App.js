import React from 'react'
import './App.css';
import Data from './components/Data'
import DataForm from './components/DataForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Data/>
      </header>
      <DataForm/>
    </div>
  );
}

export default App;
