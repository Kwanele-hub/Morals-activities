import { createSlice } from '@reduxjs/toolkit'

// const [todoList, setTodoList] = useState([])
// setTodoList()

const initialState = {
todoList: []
}

const Todo = createSlice({
    name: todos,
    initialState,
    reducers: {
        saveTodo: (state, action) => {
             state.todoList.push(action.payload)
        }
    
    }
});

export const {saveTodo} = Todo.actions
export default Todo.reducer