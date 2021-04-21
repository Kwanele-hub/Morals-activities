import React from 'react';
import {  useSelector } from 'react-redux';
import Item from './Item';

const ItemsList = () => {
    const items = useSelector(state => state.items.todoList)
    
    const removeItem =(id)=>{
    return items.filter(item=> item.id !== id)
    }
    const editItem = (id)=>{
        return(item=> item.id ===id)
    }
    const completedItem = () =>({
    })
        return(

    <ul className={'item-list'}>
        {items && items.map(item => (
            <Item key={ item.id } {...item}  remove={removeItem} edit={editItem} complete={completedItem} />
        ))}
    </ul>
    )
    
} 
export default ItemsList