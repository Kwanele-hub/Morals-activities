import React, {useState} from 'react'
// import {useDispatch} from 'react-redux';
import saveTodo from '../redux/Todo'

const Inputs = () => {
    const [input, setInput] = useState('')
    //   const dispatch =  useDispatch()





    const addToDo = () => {
        // console.log('Adding ${input}')
        // dispatch(saveTodo({
        //     item: input,
        //     done: false,
        //     id: Date.now()
        // }))

    }
    return (
        <div className='inputs'>
            <input type="text" value={input} onChange={event=>setInput(event.target.value)} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default Inputs
