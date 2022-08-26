import { call, put } from 'redux-saga/effects';

import { MetadataActionTypes, fetchSuccess } from './actions';
import { fetchMetadata } from './fetch';

export function* metadataSagas() {
  try {
    const payload = yield call(fetchMetadata);
    yield put(fetchSuccess(payload?.data?.fields));
  } catch (ex) {
    yield put({
      type: MetadataActionTypes.FETCH_ERROR,
      ex
    });
  }
}
;
