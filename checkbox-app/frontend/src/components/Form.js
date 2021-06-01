import React from 'react';


function Form() {
    return (
        <div>
            <h1>Reciepe Box</h1>
            <div className="modal-bdy">
          <p>Recipe Title</p>
          <input 
            className="modal-input"
            id="add-title"
            type="text"
            placeholder="Recipe Title"
            autoFocus
            >
          </input>
          <p>Ingredients</p>
          <textarea
            className="modal-input"
            id="add-ingredients"
            type="text"
            placeholder="Ingredients"
            >
          </textarea>
        </div>
        </div>
    )
}
export default  Form;
