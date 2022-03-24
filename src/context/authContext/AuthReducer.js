import { SUCCESS_LOGIN, LOG_OUT } from '../type';

export default (state, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            // localStorage.setItem('janani', action.payload.token);
            return {
                user: action.payload.details.userDetails,
                permission: action.payload.details.permissionDetails,
                isAuthenticated: true
            };
        case LOG_OUT:
            localStorage.clear();
            return {
                isAuthenticated: false,
                user: {},
                permission: []
            };
        default:
            return state;
    }
};
