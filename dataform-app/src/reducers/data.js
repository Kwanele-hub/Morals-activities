const initialState={
    todoList:[]
}
const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let newTodo ={
                id: action.id,
                text: action.text,
                completed: false
            }
            console.log(`action`, action)
            return {
                ...state, todoList: [...state.todoList, newTodo]
            }
                
                
            
        case 'DELETE_ITEM':
            console.log(action.payload)
            return {...state, todoList: action.payload}
        default:
            return state
    }
}

export default items;