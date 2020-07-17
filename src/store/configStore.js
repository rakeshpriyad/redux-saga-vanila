import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
//import { helloSaga } from '../sagas/hello-saga'
//import { loadUserSaga } from '../sagas/loadUserSaga'
import rootSaga from '../sagas/userSaga'
import fetchUsersReducer from '../reducers/userReducer'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  fetchUsersReducer,
  applyMiddleware(sagaMiddleware)
)
//sagaMiddleware.run(helloSaga);
sagaMiddleware.run(rootSaga);

export default store;