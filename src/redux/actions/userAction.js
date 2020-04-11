import {ATTEMPT_USER_LOGIN} from './../../shared/actionType'

export const loginAction = (email, password) =>{
   return{
       type:ATTEMPT_USER_LOGIN,
       payload:{email:email}
   }
}