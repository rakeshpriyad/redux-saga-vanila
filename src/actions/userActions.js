import * as actions from './actionCreators'

export const createUser = (name, age, salary) => {
    return { name, age, salary }
}

export const addUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: actions.UPDATE_USER,
        payload: user
    }
}

export const removeUser = (id) => {
    return {
        type: actions.DELETE_USER,
        payload: id
    }
}

export const findUsers = () => {
    return {
        type: actions.FIND_USERS,
        payload: ""
    }
}


//======= Thunk call fetch api==============

export function fetchedUsers(users) {
   return { 
        type: actions.FETCHED_USERS, 
        payload: users 
}
} 
export function loadingUsers() {
   return { type: actions.LOADING_USERS }
} 

 