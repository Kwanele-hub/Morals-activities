import {configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/Todo';

export default configureStore ({
    reducer: {
        todos:todoReducer


    },
});