import { put, takeEvery } from "redux-saga/effects";
import {
  USER_FETCH_SUCCEEDED,
  ATTEMPT_USER_LOGIN,
  ATTEMPT_USER_LOGOUT,
  USER_LOGOUT_SUCCEEDED,
  ATTEMPT_CREATE_USER,
} from "./../../shared/actionType";
import { auth } from "./../../firebase/firebaseConfig";

function* loginAsync(action) {
  try {
    const response = auth
      .signInWithEmailAndPassword(action.payload.email, action.payload.password)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error;
      });
    yield put({
      type: USER_FETCH_SUCCEEDED,
      payload: response,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* loginWatcher() {
  yield takeEvery(ATTEMPT_USER_LOGIN, loginAsync);
}

function* logoutAsync() {
  try {
    auth.signOut();
    yield put({ type: USER_LOGOUT_SUCCEEDED });
  } catch (e) {
    console.log(e);
  }
}

export function* logoutWatcher() {
  yield takeEvery(ATTEMPT_USER_LOGOUT, logoutAsync);
}

function* signUpAsync(action){
   yield console.log("signup:", action)
}

export function* signUpWatcher(){
  yield takeEvery(ATTEMPT_CREATE_USER,signUpAsync)
}
