import { createStore} from 'redux'
import auth from './reducers/reducers';

const store = createStore(auth)

export default store