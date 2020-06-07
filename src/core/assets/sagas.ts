import { call, put } from 'redux-saga/effects';
import { AssetActionTypes } from './actions'

import { fetchAbilities } from './fetch';

export function* assetSaga() {
  try {
    const payload = yield call(fetchAbilities);
    yield put({
      type: AssetActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: AssetActionTypes.FETCH_ERROR,
      ex
    });
  }
}