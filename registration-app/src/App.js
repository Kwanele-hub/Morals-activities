// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import SearchButton from './components/Search-input';


function App() {
  return (
    <div className="App">
      <Header />
    <Form />
    {/* <Button /> */}
    
    <SearchButton />
    
    </div>
  );
}

export default App;
