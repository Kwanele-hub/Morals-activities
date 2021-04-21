import React from 'react'

function DataList () {
    const todoList = useSelector(state => state.todos.todos)
    return (
      <div >
        Register
        {DataList.map((form) => <ul>  <li> {form}</li></ul>)}
      </div>
    );
  }
  
  export default DataList;
