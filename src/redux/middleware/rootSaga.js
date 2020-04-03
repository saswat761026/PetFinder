import {all} from 'redux-saga/effects';

/*
 * * yield all will contain the watchers;
 */
export default function* rootSaga() {
  yield all([
    //helloSaga(),
    //watchIncrementAsync()
  ]);
}
