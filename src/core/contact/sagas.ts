import { call, put } from 'redux-saga/effects';
import { ContactActionTypes } from './actions'

import { fetchContact } from './fetch';

export function* contactSaga() {
  try {
    const payload = yield call(fetchContact);
    yield put({
      type: ContactActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: ContactActionTypes.FETCH_ERROR,
      ex
    });
  }
}
