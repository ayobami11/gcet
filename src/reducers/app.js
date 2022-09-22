export const initialState = {
    isMenuOpen: false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MENU':
            return {
                ...state,
                isMenuOpen: true
            }

        case 'CLOSE_MENU':
            return {
                ...state,
                isMenuOpen: false
            }

        default:
            return state;
    }
}