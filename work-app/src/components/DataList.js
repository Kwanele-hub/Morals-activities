import React from 'react'

function DataList () {
    const todoList = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();
    return (
      <div >
        Register
        {DataList.map((todo, index) => <ul>  <li> {todo} <button onClick={() => dispatch(deleteTodo(index))}> X</button></li></ul>)}
      </div>
    );
  }
  
  export default DataList;
