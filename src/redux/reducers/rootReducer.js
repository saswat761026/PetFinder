import {combineReducers} from 'redux';
import userReducer from './userReducer';
import spinnerReducer from './spinnerReducer';
import toggleAlertReducer from './toggleAlertReducer';

export const rootReducer = combineReducers({user:userReducer, spinner:spinnerReducer, alert:toggleAlertReducer}) //e.g, {potato: potatoReducer, tomato: tomatoReducer}

