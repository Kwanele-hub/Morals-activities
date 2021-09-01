import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItems} from './actions/index'
import ItemsList from './components/ItemList';



const App = ({ dispatch }) => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      workingOn: "", 
    });
    const handleChange = (e)=> {
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      });
    }

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(addItems(formData));
  setFormData({firstName: '', lastName:'', workingOn:'',})
  
};




  return (
    <div className="App">
      <header className="App-header">
        <h1>Workers Progress</h1>
        
      </header>
      <div className={'wrapper'}>
            <h1>Daily Updates</h1>
            <form onSubmit={handleSubmit} >
                <div className={'div-wrapper'}>
                    <label></label>
                    <input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                    <label></label>
                    <input placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
                    <label></label>
                    <input placeholder="WorkingOn" type="text" name="workingOn" value={formData.workingOn} onChange={handleChange} required/>
                    <label></label>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <ItemsList/>
            
        </div>
      
    </div>
  );
}

export default connect() (App);
