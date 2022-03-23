import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import customizeSlice from './customizeSlice';

const reducer = combineReducers({
    customizeSlice
    // here we will be adding reducers
});
const store = configureStore({
    reducer
});
export default store;
