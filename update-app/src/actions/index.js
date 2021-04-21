let incrementId = 0;

export const addItems = item => ({
    type: 'ADD_ITEMS',
    id: incrementId++,
   payload: item,
});

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    payload: id
});

export const editItem = id =>({
    type: 'EDIT_ITEM',
    payload: id
})

export const completeItem = id => ({
    type: 'COMPLETE_ITEM',
    payload: id
})