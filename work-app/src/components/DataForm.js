import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/actions/todo'

function DataForm () {
    const [formData, setFormData] = useState("")
    // const dispatch = useDispatch()
    
  
  
    return (
      <div>
        <input placeholder="First Name" onChange={(e) => setFormData(e.target.value)} value={formData} />
        <button onClick={() => (addTodo(formData))}> SUBMIT </button>
      </div>
    );
  }
  
  export default DataForm;
