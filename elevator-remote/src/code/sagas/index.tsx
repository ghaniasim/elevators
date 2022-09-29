import { call, put, take, takeLatest } from "redux-saga/effects";

import { INIT_INITIALIZE, RESET_ELEVATORS } from "../state/actions";
import { setElevators } from "../state/reducers/elevators";
import { api } from "../models/requests";

export function* watcherSaga() {
  yield take(INIT_INITIALIZE);
  yield takeLatest(RESET_ELEVATORS, fetch);
  yield call(fetch);
}

export function* fetch(): any {
  try {
    const response = yield call(api.getElevators);
    yield put(setElevators(response));
  } catch (error) {
    console.log("Error ", error);
  }
}