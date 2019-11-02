import { call, put, all, takeEvery } from 'redux-saga/effects';
import { propOr } from 'ramda';

import { BlogActionTypes } from './actions'

import { fetchBlog } from './fetch';

export function* blogSaga() {
  try {
    const payload = yield call(fetchBlog);
    yield put({
      type: BlogActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: BlogActionTypes.FETCH_ERROR,
      ex
    });
  }
}
