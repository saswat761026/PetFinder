import {
    START_LOADER,
    STOP_LOADER,
  } from "./../../shared/actionType";

const spinnerReducer = (state=false,action) =>{
switch(action.type){
    case START_LOADER:
        return state=true
    case STOP_LOADER:
        return state=false   
    default:
        return state
   }
}

export default spinnerReducer