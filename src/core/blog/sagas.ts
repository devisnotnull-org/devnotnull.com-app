import { call, put } from 'redux-saga/effects';

import { BlogActionTypes, fetchSuccess } from './actions';

import { fetchBlog } from './fetch';

export function* blogSaga() {
  try {
    const payload = yield call(fetchBlog);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: BlogActionTypes.FETCH_ERROR,
      ex
    });
  }
}

export function* blogEntrySaga() {
  try {
    const payload = yield call(fetchBlog);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: BlogActionTypes.FETCH_ERROR,
      ex
    });
  }
}
