const initState = {
    theme: 'dark',
};
enum ThemeActions {
    SET_THEME = 'SET_THEME',
}
type ActionsType = ReturnType<typeof setTheme>
type InitialStateType = typeof initState

export const themeReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ThemeActions.SET_THEME:
            return {...state, theme: action.payload};
        default:
            return state;
    }
};

export const setTheme = (theme: string) => {
    return {
        type: ThemeActions.SET_THEME,
        payload: theme,
    }
}