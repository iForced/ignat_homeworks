import {UserType} from "../HW8";

type ActionsType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name > b.name ? 1 : -1)
                : [...state].sort((a, b) => b.name >= a.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}