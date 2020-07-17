import * as acttions from '../actions/actionCreators'
const insState =[]
let lastId = 0;
const userReducer = (state = insState, action) =>{
    if(action.type === acttions.ADD_USER){
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
    } else if(action.type === acttions.SAVE_USER){
        console.log(state);
        return [
            ...state,
            action.payload.user
        ]
    }else if(action.type === acttions.UPDATE_USER){
        console.log("=update=="+state)
       /*  return state.map((user) => {
            if (user.id === action.payload.id) {
                return {
                    ...user,
                    ...action.payload
                };
            } else {
                return user;
            }
        }); */
        return state;
    }else if(action.type === acttions.FIND_USERS){
        console.log("=find=="+state)
        //return state.filter( user => user.id === action.payload.id)
        return state;
    }else if(action.type === acttions.DELETE_USER){
        return state.filter( user => user.id !== action.payload.id)
    } else if(action.type === acttions.SAVE_USER){
            return [
                ...state,
                action.user
            ];
    }

    return state;
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