import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from '../reducers/reducer'
import thunk from 'redux-thunk';
import userReducer, {fetchUsersReducer, loadingUserReducer} from '../reducers/userReducer'

//const store = createStore(reducer);

const rootReducer = combineReducers({
    bugsReducer: reducer,
    userReducer: userReducer,
    users: fetchUsersReducer,
    loading: loadingUserReducer
 }) 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
