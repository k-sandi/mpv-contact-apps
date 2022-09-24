import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// reducres
import loadingReducer from './reducers/loading';
import contactReducer from './reducers/contacts';

const reducers = combineReducers({
    loadingReducer,
    contactReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;