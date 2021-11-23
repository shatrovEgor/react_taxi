import {LOG_IN, LOG_OUT} from '../actions'
import store from '../store'

export default function auth (state = false , action) {
    switch (action.type) {
        case LOG_IN:
            return {...store, login: true}
        case LOG_OUT:
            return {...store, login: false}
        default:
            return state
    }
}