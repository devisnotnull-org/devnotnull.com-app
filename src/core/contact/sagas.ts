import { call, put } from "redux-saga/effects";
import { ContactActionTypes, fetchSuccess } from "./actions";

import { fetchContact } from "./fetch";

export function* contactSaga() {
  try {
    const payload = yield call(fetchContact);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: ContactActionTypes.FETCH_ERROR,
      ex,
    });
  }
}
