/* eslint-disable react/destructuring-assignment */
import React, { useReducer } from 'react';
import config from 'config';
import axios from 'axios';
import SetingContext from './setingContext';
import AuthReducer from './setingReducer';
import { SET_MENU, MENU_TOGGLE, MENU_OPEN, SET_FONT_FAMILY, SET_BORDER_RADIUS } from '../type';
import BaseURL from 'utils/baseUrl';
// import Notification from '../../utlils/notification';
// import AllApplicationErrorHandle from '../../utlils/allApplicationErrorHandle';

const SetingState = (props) => {
    const initialState = {
        isOpen: [], // for active default menu
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // eslint-disable-next-line consistent-return
    const login = async (data, type) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post(`${BaseURL}/api/user/login`, data, config);
            dispatch({ type: SUCCESS_LOGIN, payload: res.data });
            return null;
        } catch (err) {
            console.log(err);
            // AllApplicationErrorHandle(err);
        }
    };

    // log out
    const logout = () => {
        dispatch({ type: LOG_OUT });
    };

    return (
        <SetingContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                success: state.success,
                permission: state.permission,
                login,
                logout
            }}
        >
            {props.children}
        </SetingContext.Provider>
    );
};
export default SetingState;
