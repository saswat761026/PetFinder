import {
    SHOW_ALERT,
    HIDE_ALERT,
  } from "../../shared/actionType";

const toggleAlertReducer = (state=false,action) =>{
switch(action.type){
    case SHOW_ALERT:
        return state=true
    case HIDE_ALERT:
        return state=false   
    default:
        return state
   }
}

export default toggleAlertReducer