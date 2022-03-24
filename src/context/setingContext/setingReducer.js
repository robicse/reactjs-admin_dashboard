import { SET_MENU, MENU_TOGGLE, MENU_OPEN, SET_FONT_FAMILY, SET_BORDER_RADIUS } from '../type';

export default (state, action) => {
    let id;
    switch (action.type) {
        case MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        default:
            return state;
    }
};
