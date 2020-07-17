import * as actions from './actionCreators'

export function bugAdd(description){
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description,
            resolved: true
        }
    }
}


export function bugRemove(id){
    return{
    type: actions.BUG_REMOVED,
    payload: {
        id: id
    }
}
}