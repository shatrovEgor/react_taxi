import {INCREMENT, DECREMENT, PROFILE_NAME, PROFILE_CARD_ID, PROFILE_PASSWORD, PROFILE_DATE} from '../actions'


const defaultState = {
    name: '',
    cardId: '',
    password: '',
    date: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case PROFILE_NAME:
            return { ...state, name: action.payload }
        case PROFILE_CARD_ID:
            return {...state, cardId: action.payload}
        case PROFILE_PASSWORD:
            return {...state, password: action.payload}
        case PROFILE_DATE:
            return {...state, date: action.payload}
        default:
            return state
    }
}