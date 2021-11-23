export const ROUTE_TAXI = 'ROUTE_TAXI'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const setRouteTaxi = (route) => ({
    type: ROUTE_TAXI,
    payload: route,
})

export const setLogIn = () => ({type:LOG_IN})
export const setLogOut = () => ({type:LOG_OUT})
