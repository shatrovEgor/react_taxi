import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import route from './reducers/TaxiRoute'
import auth from './reducers/Auth';
import dataCard from './reducers/DataCard';


const reducers = combineReducers({
    auth,
    route,
    dataCard,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(reducers, composeWithDevTools())

export default store