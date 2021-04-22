import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteItem, completeItem, editItem } from '../actions'




const Item = ({firstName,lastName,workingOn,remove ,id, complete,completedTodo}) => {
  const [edit,setEdit] = useState(false);
  const [todo,setTodo] = useState(workingOn)
  const todoList = useSelector(state =>state.items.todoList)
  console.log(todoList)
  
const handleEditSubmit = (id) => {
let newObj = todoList.find(newItem => newItem.id === id )
newObj.workingOn = todo
return dispatch(editItem(newObj))


  }
const handleEditChange = (e) => {
    setTodo(e.target.value);
  };
  const handleEdit = () => {
    setEdit(!edit);
  };


const dispatch = useDispatch()
  return(
    <div>
 <li className='item'>
     <table>
       <tbody>
       <tr>
            <th>Name</th>
          <th>Surname</th>
          <th>workingOn</th>
          
            </tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{workingOn}</td>
       </tbody>
           
        </table>
    
    <button onClick={()=> dispatch(deleteItem(remove(id)))}>delete</button>

    <button onClick={()=> dispatch (completeItem(complete(id)))}>complete</button>
    
  </li>
  <div className="todo" key={workingOn.id}>
      {!edit ? (
        <>
          <input
            type="checkbox"
            checked={workingOn.completed}
            onChange={() => completedTodo(workingOn.id)}
            disabled={workingOn.completed ? true : false}
          />{" "}
          <span>{workingOn.task}</span>{" "}
          <button onClick={handleEdit} disabled={workingOn.completed}>
            Edit
          </button>
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            value={todo}
            name="todo"
            onChange={handleEditChange}
          />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit" onClick={() => handleEditSubmit(id)}>
            Save
          </button>
        </>
      )}
    </div>
    </div>
  )
}


export default Item