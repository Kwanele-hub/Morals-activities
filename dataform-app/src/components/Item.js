import React from 'react'
import {useDispatch} from 'react-redux'
// import { deleteItem } from '../actions'


const Item = ({  completed, text,id}) => {


const dispatch = useDispatch()
  return(
  <li className='item'>
    {text}
    {/* <h5 onClick={()=> dispatch(deleteItem(remove(id)))}>X</h5> */}
  </li>)
}


export default Item