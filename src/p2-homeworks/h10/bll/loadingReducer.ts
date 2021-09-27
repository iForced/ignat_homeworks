type ActionType = {
    type: string
    isLoading: boolean
}
type InitialStateType = typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {
        type: 'SET_LOADING',
        isLoading: isLoading
    }
}