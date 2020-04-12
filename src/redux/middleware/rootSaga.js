import { all } from "redux-saga/effects";
import { loginWatcher, logoutWatcher } from "./userSaga";

/*
 * * yield all will contain the watchers;
 */
export default function* rootSaga() {
  yield all([loginWatcher(), logoutWatcher()]);
}
