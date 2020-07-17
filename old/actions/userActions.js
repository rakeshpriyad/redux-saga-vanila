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

function fetchedUsers(users) {
   return { 
        type: actions.FETCHED_USERS, 
        payload: users 
}
} 
function loadingUsers() {
   return { type: actions.LOADING_USERS }
} 
export const URL ='http://localhost:3000/'
export function fetchingUsers() {
   return (dispatch) => {
      dispatch(loadingUsers())
      fetch(actions.URL+'users/')
         .then(res => res.json())
         .then(users => {
           console.log("users----"+ users)
           dispatch(fetchedUsers(users))
        }).catch(error => console.error(error));
   }
} 

export const saveUser = (user) => ({
    type: actions.SAVE_USER,
    payload: user
});


export function  submitSaveUser(user) {
    console.log("Saving.."+JSON.stringify(user));
    return (dispatch) => {
            fetch('http://localhost:3000/users/', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then( res => res.json())
            .then(result => {
                console.log("result--save--"+ result)
                if(result.errors){
                    dispatch({ type: 'SAVE_FAILED', errors: result.errors})
                } else {
                    dispatch(saveUser(result));
                }
        }).catch(error => console.error(error));
    }
    
 } 

 export function submitUpdateUser(user){
   console.log(user.id);
    return (dispatch) => {
       
            fetch(actions.URL+'users/'+user.id, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then( res => res.json())
            .then(result => {
                if(result.errors){
                    dispatch({ type: 'UPDATE_FAILED', errors: result.errors})
                } else {
                    console.log("update result "+ result)
                    dispatch(updateUser(user));
                }
        }).catch(error => console.error(error));
    }
 }

 export const submitRemoveUser = (id) => {
    return (dispatch) => {
        fetch(actions.URL+'users/'+id, {
            method: 'DELETE'
        }).then(() => {
            dispatch(removeUser(id));
        })
    }
};

 