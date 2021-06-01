const initialState={
    state:[]
}
const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let newData = {...action.payload,id:Math.random()}
            console.log(`action`, newData)
            return {
                ...state, todoList: [...state.todoList, newData]
            }
                case 'EDIT_ITEMS':
                    
                    return{
                        ...state, todoList:[...state.todoList]
                    }
            
        case 'DELETE_ITEM':
            console.log(action.payload)
            return {...state, todoList: action.payload}
        default:
            return state
    }
}

export default items;