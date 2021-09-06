const initialState={
    itemList:[]
}
const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let newData = {...action.payload,id:Math.random()}
            console.log(`action`, newData)
            return {
                ...state, itemList: [...state.itemList, newData]
            }
                case 'EDIT_ITEMS':
                    
                    return{
                        ...state, itemList:[...state.itemList]
                    }
            
        case 'DELETE_ITEM':
            console.log(action.payload)
            return {...state, itemList: action.payload}
        default:
            return state
    }
}

export default items;