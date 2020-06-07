import { call, put } from 'redux-saga/effects';
import { ExperianceActionTypes } from './actions'

import { fetchExperiance } from './fetch';

export function* experianceSaga() {
  try {
    const payload = yield call(fetchExperiance);
    yield put({
      type: ExperianceActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: ExperianceActionTypes.FETCH_ERROR,
      ex
    });
  }
}
