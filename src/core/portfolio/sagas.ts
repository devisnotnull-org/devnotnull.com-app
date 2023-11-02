import { call, put } from "redux-saga/effects";
import { fetchSuccess, fetchError } from "./actions";

import { fetchFolio } from "./fetch";

export function* folioSaga() {
  try {
    const payload = yield call(fetchFolio);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put(fetchError(ex));
  }
}
