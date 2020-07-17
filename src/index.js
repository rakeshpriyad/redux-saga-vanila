//import React from 'react';
import store from './store/configStore'
//import {fetchedUsers,addUser, updateUser, findUsers, removeUser,createUser, fetchingUsers, saveUser, submitRemoveUser, submitUpdateUser, submitSaveUser} from './actions/userActions'
import {createUser} from './actions/userActions'

export const LOAD_USERS_LOADING = 'REDUX_SAGA_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_SAGA_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_SAGA_LOAD_USERS_ERROR';

store.dispatch({ type: 'GET_USER' });
let lastId =401
const user = createUser("rakesh", "35", "200K");
store.dispatch({ type: 'ADD_USER', payload: user });
const user3 = {...createUser("rakesh", "35", "200K"), id: lastId};
store.dispatch({ type: 'UPDATE_USER', payload: user3 });
store.dispatch({ type: 'DELETE_USER', payload: user3 });