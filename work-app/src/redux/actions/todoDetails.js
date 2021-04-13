const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [...state.todos, action.payload] };
      // case "DELETE_TODO":
      //   return { ...state, todos: [...state.todos.filter((item, index) => index !== action.payload)] }
      // default:
      //   return state;
    }
  };
  
  
  export default todoReducer