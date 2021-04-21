import React from 'react'
import './App.css';
import FormList from './components/FormList';





    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Data</h1>
      </header> 
      <form 
            onSubmit={handleSubmit} >
                
                    Todo: 
                    <input type="text" name="name"  />
                
                
                    <input type="submit" value="Submit" />
               
            </form>
            <FormList/>

    </div>
  );
}

export default App