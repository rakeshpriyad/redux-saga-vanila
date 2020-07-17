import { takeLatest, call, put, all } from 'redux-saga/effects';

import * as actions from '../actions/actionCreators'
import {fetchUsers, submitSaveUser, submitUpdateUser, submitRemoveUser} from '../api/api.js'

export const saveUser = (user) => ({
    type: actions.SAVE_USER,
    payload: user
});

function* callFetchUsers(action) {
    const result = yield call(fetchUsers, action.data);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put({ type: 'GET_USER_FAILED', errors: result.errors });
    } else {
        console.log("data received", result);
        yield put({ type: "USER_RECEIVED", users: result.data });
    }
}

function* fetchUserSaga() {
    yield takeLatest('GET_USER', callFetchUsers);
}

function* callSaveUser(action) {
    const result = yield call(submitSaveUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put({ type: 'ADD_USER_FAILED', errors: result.errors });
    } else {
        console.log("User Saved " + result);
        yield put({ type: "SAVE_USER_SUCCESS_FULL" });
    }
}

function* saveUserSaga() {
    yield takeLatest(actions.ADD_USER, callSaveUser);
}

function* callUpdateUser(action) {
    const result = yield call(submitUpdateUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put({ type: 'UPDATE_FAILED', errors: result.errors });
    } else {
        console.log("User Updated " + result);
        yield put({ type: "UPDATE_USER_SUCCESS_FULL" });
    }
}

function* updateUserSaga() {
    yield takeLatest(actions.UPDATE_USER, callUpdateUser);
}

function* callDeleteUser(action) {
    const result = yield call(submitRemoveUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put({ type: 'REMOVE_FAILED', errors: result.errors });
    } else {
        console.log("User Removed " + result);
        yield put({ type: "REMOVE_USER_SUCCESS_FULL" });
    }
}

function* deleteUserSaga() {
    yield takeLatest(actions.DELETE_USER, callDeleteUser);
}

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        fetchUserSaga(),
        saveUserSaga(),
        updateUserSaga(),
        deleteUserSaga()
    ])
}
