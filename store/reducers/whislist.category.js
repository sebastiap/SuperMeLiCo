// import LIST 
import { SAVE_LIST } from "../actions/whislist.action";


const INITIAL_STATE = {
previouslist:[],
list:[]
}

// Los reducers se pasa un state y un action
const wishtlistReducer = (state = INITIAL_STATE, action) =>
{
    switch(action.type){
    case SAVE_LIST:
        return {...state,list:action.list}
    default:
        return state
    }
}


export default wishtlistReducer