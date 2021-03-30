import React, {useState} from 'react'

const Inputs = () => {
    const [input, setInput] = useState('')
  




    const addToDo = () => {
        
    }
    return (
        <div className='inputs'>
            <input type="text" value={input} onChange={event=>setInput(event.target.value)} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}

export default Inputs
