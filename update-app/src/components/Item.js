import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteItem, editItem, completeItem } from '../actions'



const Item = ({firstName,lastName,workingOn,remove ,id, edit, complete}) => {
  

const dispatch = useDispatch()
  return(
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
    <button onClick={()=> dispatch (editItem(edit(id)))}>edit</button>
    <button onClick={()=> dispatch (completeItem(complete(id)))}>complete</button>
    
  </li>)
}


export default Item