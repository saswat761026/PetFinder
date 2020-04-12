import {
    USER_FETCH_SUCCEEDED,
    USER_LOGOUT_SUCCEEDED,
  } from "./../../shared/actionType";

const userReducer = (state={},action) =>{
switch(action.type){
    case USER_FETCH_SUCCEEDED:
        return Object.assign({},state,action.payload)
    case USER_LOGOUT_SUCCEEDED:
        return Object.assign({})    
    default:
        return state
   }
}

export default userReducer