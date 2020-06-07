import { call, put } from 'redux-saga/effects';
import { EducationActionTypes } from './actions'

import { fetchEducation } from './fetch';

export function* educationSaga() {
  try {
    const payload = yield call(fetchEducation);
    yield put({
      type: EducationActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: EducationActionTypes.FETCH_ERROR,
      ex
    });
  }
}
