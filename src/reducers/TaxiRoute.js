import {ROUTE_TAXI} from '../actions'
import store from '../store'



export default function route (state = [] , action) {
    switch (action.type) {
        case ROUTE_TAXI:
            return [...action.payload]
        default:
            return state
    }
}