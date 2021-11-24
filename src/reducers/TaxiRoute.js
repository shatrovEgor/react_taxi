import {ROUTE_TAXI} from '../actions'

export default function route (state = [] , action) {
    switch (action.type) {
        case ROUTE_TAXI:
            return {adress: action.payload}
        default:
            return state
    }
}