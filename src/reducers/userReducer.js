import * as acttions from '../actions/actionCreators'
const insState = []
let lastId = 0;
const userReducer = (state = insState, action) => {
    switch (action.type) {
        case acttions.ADD_USER:
            console.log(action);
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    age: action.payload.age,
                    salary: action.payload.salary,
                }
            ]
        case acttions.SAVE_USER:
            console.log(state);
            return [
                ...state,
                action.payload.user
            ]
        case acttions.UPDATE_USER:
            console.log("=update==" + state)
            return state.map((user) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        ...action.payload
                    };
                } else {
                    return user;
                }
            });
        case acttions.FIND_USERS:
            console.log("find-->" + state)
            return state.filter(user => user.id === action.payload.id)
        case acttions.DELETE_USER:
            return state.filter(user => user.id !== action.payload.id)
        default:
            return state
    }
}

export const fetchUsersReducer = (oldState = [], action) => {
    switch (action.type) {
        case acttions.FETCHED_USERS:
            return action.payload
        default:
            return oldState
    }
}
export const loadingUserReducer = (oldState = "false", action) => {
    switch (action.type) {
        case acttions.FETCHED_USERS:
            return false
        case acttions.LOADING_USERS:
            return true
        default:
            return oldState
    }
}

export default userReducer;