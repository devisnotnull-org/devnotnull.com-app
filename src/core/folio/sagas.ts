import { call, put } from 'redux-saga/effects';
import { FolioActionTypes } from './actions'

import { fetchFolio } from './fetch';

export function* folioSaga() {
  try {
    const payload = yield call(fetchFolio);
    yield put({
      type: FolioActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: FolioActionTypes.FETCH_ERROR,
      ex
    });
  }
}
