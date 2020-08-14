import { call, put } from 'redux-saga/effects';
import { ExperianceActionTypes, fetchSuccess } from './actions'

import { fetchExperiance } from './fetch';

export function* experianceSaga() {
  try {
    const payload = yield call(fetchExperiance);
    yield put(fetchSuccess(payload.data))
  } catch(ex) {
    yield put({
      type: ExperianceActionTypes.FETCH_ERROR,
      ex
    });
  }
}
