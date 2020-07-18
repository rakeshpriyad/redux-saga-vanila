import { takeLatest, call, put, all } from 'redux-saga/effects';

import * as actions from '../actions/actionCreators'
import {fetchUsers, submitSaveUser, submitUpdateUser, submitRemoveUser} from '../api/api.js'
import {getUserFailed,userReceived, saveUserSuccess, updateUserSuccess,removeUserSuccess, addUserFailed,updateUserFailed, removeUserFailed}  from '../actions/userActions'


function* callFetchUsers(action) {
    const result = yield call(fetchUsers, action.data);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(getUserFailed(result.errors));
    } else {
        console.log("data received", result);
        yield put(userReceived(result.data));
    }
}

function* fetchUserSaga() {
    yield takeLatest(actions.GET_USER, callFetchUsers);
}

function* callSaveUser(action) {
    const result = yield call(submitSaveUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(addUserFailed(result.errors));
    } else {
        console.log("User Saved " + result);
        yield put(saveUserSuccess());
    }
}

function* saveUserSaga() {
    yield takeLatest(actions.ADD_USER, callSaveUser);
}

function* callUpdateUser(action) {
    const result = yield call(submitUpdateUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(updateUserFailed(result.errors));
    } else {
        console.log("User Updated " + result);
        yield put(updateUserSuccess());
    }
}

function* updateUserSaga() {
    yield takeLatest(actions.UPDATE_USER, callUpdateUser);
}

function* callDeleteUser(action) {
    const result = yield call(submitRemoveUser, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(removeUserFailed(result.errors));
    } else {
        console.log("User Removed " + result);
        yield put(removeUserSuccess());
    }
}

function* deleteUserSaga() {
    yield takeLatest(actions.DELETE_USER, callDeleteUser);
}

export function* helloSaga() {
    console.log('Hello Sagas!')
    yield put({type : "HELLO_SAGA"});
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
