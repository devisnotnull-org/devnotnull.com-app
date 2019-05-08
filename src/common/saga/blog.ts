import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as api from '../fetch/blog';

function* fetchBlogSaga() {
  // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
  // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
  const userData = yield call(api.fetchPosts);
  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: 'FETCH_USER_SUCCESS',
    userData
  });
}
