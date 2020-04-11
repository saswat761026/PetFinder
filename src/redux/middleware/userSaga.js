import { put, takeEvery } from "redux-saga/effects";
import {
  USER_FETCH_SUCCEEDED,
  ATTEMPT_USER_LOGIN,
} from "./../../shared/actionType";

function* loginAsync(action) {
  try {
    yield put({
      type: USER_FETCH_SUCCEEDED,
      payload: { email: action.payload.email, loggedIn: true },
    });
  } catch (e) {
    console.log(e);
  }
}

export function* loginWatcher() {
  yield takeEvery(ATTEMPT_USER_LOGIN, loginAsync);
}
