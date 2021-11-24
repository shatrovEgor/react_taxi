export const ROUTE_TAXI = 'ROUTE_TAXI'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const SAVE_CARD_DATA = 'SAVE_CARD_DATA'

export const setRouteTaxi = (route) => ({
    type: ROUTE_TAXI,
    payload: route,
})
export const saveCardData = (data) => ({
    type: SAVE_CARD_DATA,
    payload: data
})

export const setLogIn = () => ({type:LOG_IN})
export const setLogOut = () => ({type:LOG_OUT})

