import { call, put } from 'redux-saga/effects';

import { BlogItemActionTypes, fetchSuccess } from './actions';

import { fetchBlogItem } from './fetch';


export function* blogEntrySaga(slug: string) {
  try {
    console.log("FETCH BLOG ITEM")
    console.log(slug)
    const payload = yield call(fetchBlogItem, slug);
    yield put(fetchSuccess(payload.data?.payload));
  } catch (ex) {
    yield put({
      type: BlogItemActionTypes.FETCH_ERROR,
      ex
    });
  }
}
