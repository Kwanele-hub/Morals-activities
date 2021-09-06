import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItems} from './actions/index'
// import ItemsList from './components/ItemList';



const App = ({ dispatch }) => {
    const [formData, setFormData] = useState({
      recipeName: "",
      ingredients: "", 
    });
    const handleChange = (e)=> {
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      });
    }

const handleSubmit = (event) => {
  event.preventDefault();
  event.target.reset();
  

  dispatch(addItems(formData));
  
};




  return (
    <div className="App">
            <h1>Reciepe Box</h1>
            <div className="modal-bdy">
          <p>Recipe Title</p>
          <input 
            className="modal-input"
            id="add-title"
            type="text"
            name="recipeName"
            placeholder="Recipe Title"
            autoFocus
            value={formData.recipeName}
            onChange={handleChange} required
            >
          </input>
          <p>Ingredients</p>
          <textarea
            className="modal-input"
            id="add-ingredients"
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={formData.ingredients}
            onChange={handleChange} required
            >
          </textarea>
          <br></br>
          <label></label>
                    <input type="submit" onSubmit={handleSubmit} value="Submit" />
        </div>
        
            {/* <ItemsList/> */}
            
        </div>
      
    
  );
}

export default connect() (App);