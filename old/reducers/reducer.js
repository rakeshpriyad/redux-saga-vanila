import * as acttions from '../actions/actionCreators'
const insState =[]
let lastId = 0;
export default function reducer (state = insState, action){
    if(action.type === acttions.BUG_ADDED){
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if(action.type === acttions.BUG_REMOVED){
        return state.filter( bug => bug.id !== action.payload.id)
    }

    return state
}