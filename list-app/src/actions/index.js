let incrementId = 0;

export const addItems = item => ({
    type: 'ADD_ITEMS',
    id: incrementId++,
    text: item.text
});

export const delteItem = id => ({
    type: 'DELETE_ITEM',
    payload: id
});