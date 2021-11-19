export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const PROFILE_NAME = 'PROFILE_NAME';
export const PROFILE_CARD_ID = 'PROFILE_CARD_ID';
export const PROFILE_PASSWORD = 'PROFILE_PASSWORD';
export const PROFILE_DATE = 'PROFILE_DATE';

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const setNameProfile = (name) => ({
    type: PROFILE_NAME,
    payload: name
});
export const setCardIdProfile = (name) => ({
    type: PROFILE_CARD_ID,
    payload: name
});
export const setPasswordProfile = (name) => ({
    type: PROFILE_PASSWORD,
    payload: name
});
export const setDateProfile = (name) => ({
    type: PROFILE_DATE,
    payload: name
});
