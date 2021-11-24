import {SAVE_CARD_DATA} from '../actions'

export default function dataCard (state = {indicateCard: false} , action) {
    switch (action.type) {
        case SAVE_CARD_DATA:
            return {dataCardProfile: action.payload, indicateCard: true }
        default:
            return state
    }
}