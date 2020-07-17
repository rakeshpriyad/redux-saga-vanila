import { takeLatest, call, fork, put } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

const fetchFromServer = () => {
    //console.log("User submit to server: "+JSON.stringify(data));
    return fetch('http://localhost:3000/users', {
       method: 'GET',
       headers: {
           'Content-type' : 'application/json'
       }
   }).then( res => res.json()).catch(error => console.error(error));
   
}

function* callSubmit(action){
    yield put(startSubmit('UserForm'));
    let errors = {};
    const result = yield call(fetchFromServer, action.data);
    if(result.errors){
        console.log("Error occured : "+ result.errors)
        yield put({ type: 'GET_USER_FAILED', errors: result.errors});
    } else {
        console.log("data received", result);
        yield put({ type: "USER_RECEIVED", users: result.data });
    }
    yield put(stopSubmit('UserForm', errors));
}

function* submitUserSaga(){
   yield takeLatest('GET_USER', callSubmit);
}

export function* loadUserSaga(){
    yield [
        fork(submitUserSaga)
    ]
}

