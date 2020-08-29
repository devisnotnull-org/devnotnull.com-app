import { call, put } from 'redux-saga/effects';
import { EducationActionTypes, fetchSuccess } from './actions';

import { fetchEducation } from './fetch';

export function* educationSaga() {
  try {
    const payload = yield call(fetchEducation);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: EducationActionTypes.FETCH_ERROR,
      ex
    });
  }
}
