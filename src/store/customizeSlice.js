import { createSlice } from '@reduxjs/toolkit';
import config from 'config';
// Slice
const slice = createSlice({
    name: 'customize',
    initialState: {
        isOpen: [], // for active default menu
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true
    },
    reducers: {
        menuOpen: (state, action) => {
            state.isOpen = [action.payload];
        },
        setMenu: (state, action) => {
            state.opened = action.payload;
        }
    }
});

const { menuOpen, setMenu } = slice.actions;
