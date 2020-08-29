import { call, put } from 'redux-saga/effects';
import { AssetActionTypes, fetchSuccess } from './actions';

import { fetchAbilities } from './fetch';

export function* assetSaga() {
  try {
    const payload = yield call(fetchAbilities);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: AssetActionTypes.FETCH_ERROR,
      ex
    });
  }
}
