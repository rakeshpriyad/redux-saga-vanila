import * as actions from '../actions/actionCreators'

export const fetchUsers = () => {
    return fetch(actions.URL + 'users/', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json()).catch(error => {
        console.error(error);
        return error;
    });

}

export function submitSaveUser(user) {
    console.log("Saving.." + JSON.stringify(user));
    return fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => {
        return res.json();
    }
    ).catch(error => {
        console.error(error);
        return error;
    });
}



export function submitUpdateUser(user) {
    console.log(user.id);
    return fetch(actions.URL + 'users/' + user.id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .catch(error => {
            console.error(error);
            return error;
        });
}


export const submitRemoveUser = (user) => {
    return fetch(actions.URL + 'users/' + user.id, {
        method: 'DELETE'
    }).then(res => res.json())
        .catch(error => {
            console.error(error);
            return error;
        });
}
