import React from 'react'
import {useDispatch} from 'react-redux'
import { delteItem } from '../actions'


const Item = ({  completed, text, number,remove ,id}) => {


const dispatch = useDispatch()
  return(
  <li className='item'>
    {text}
    <h5 onClick={()=> dispatch(delteItem(remove(id)))}>X</h5>
  </li>)
}


export default Item