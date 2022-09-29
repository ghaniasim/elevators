import {
  Middleware,
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { watcherSaga } from "../sagas";

import { elevatorsReducer } from "./reducers";
import { State as ElevatorState } from "./reducers/elevators";

export interface ApplicationState {
  app: ElevatorState;
}

const rootReducer = combineReducers<ApplicationState>({
  app: elevatorsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export function createMiddleware(): Middleware[] {
  const middleware: Middleware[] = [sagaMiddleware];
  middleware.push(createLogger({ collapsed: true, timestamp: false }));
  return middleware;
}

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...createMiddleware())
);

sagaMiddleware.run(watcherSaga);

export default store;
