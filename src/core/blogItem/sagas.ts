import { call, put } from 'redux-saga/effects';

import { BlogActionTypes, fetchSuccess } from './actions';

import { fetchBlogItem } from './fetch';


export function* blogEntrySaga(slug: string) {

  try {
    const payload = yield call(fetchBlogItem, slug);
    yield put(fetchSuccess(payload.data));
  } catch (ex) {
    yield put({
      type: BlogActionTypes.FETCH_ERROR,
      ex
    });
  }
}
