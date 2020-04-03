import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./../middleware/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export const store = createStore(
  rootReducer, {},  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);
