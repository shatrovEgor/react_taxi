import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import route from './reducers/TaxiRoute'
import auth from './reducers/Auth';


const reducers = combineReducers({
    auth,
    route,
    form: reduxFormReducer, // mounted under "form"
  });

const store = createStore(reducers, composeWithDevTools())

export default store