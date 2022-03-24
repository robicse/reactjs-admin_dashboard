/* eslint-disable react/destructuring-assignment */
import React, { useReducer } from 'react';
import localForage from 'localforage';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { SUCCESS_LOGIN, LOG_OUT } from '../type';
import BaseURL from 'utils/baseUrl';
import setAuthToken from 'utils/setToken';
// import Notification from '../../utlils/notification';
// import AllApplicationErrorHandle from '../../utlils/allApplicationErrorHandle';

const AuthState = (props) => {
    // const localCall = async () => {
    //     const a = await localForage.getItem('janani_data');
    //     initData = JSON.parse(a);
    // };
    // localCall();
    const initData = JSON.parse(localStorage.getItem('janani_data'));
    console.log(initData);

    const initialState = {
        isAuthenticated: false,
        user: initData?.userDetails,
        permission: initData?.permissionDetails,
        success: false
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // eslint-disable-next-line consistent-return
    const login = async (data) => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post(`${BaseURL}/api/user/login`, data, config);
            localStorage.setItem('janani_data', JSON.stringify(res.data.details));
            dispatch({ type: SUCCESS_LOGIN, payload: res.data });
            setAuthToken(res.data.token);
            return true;
        } catch (err) {
            console.log(err);
            return false;
            // AllApplicationErrorHandle(err);
        }
    };

    // log out
    const logout = () => {
        dispatch({ type: LOG_OUT });
        return true;
    };

    return (
        <AuthContext.Provider
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
        </AuthContext.Provider>
    );
};
export default AuthState;
