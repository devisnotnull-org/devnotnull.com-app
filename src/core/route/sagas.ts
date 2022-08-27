import { all, select, call } from 'redux-saga/effects';

import { blogSaga } from '@core/blog/sagas';
import { blogEntrySaga } from '@core/blogItem/sagas';

export function* routeSagas() {
  // Fetch the current page pathname from state
  const currentRoute = yield select((state) => state.router)
  
  // Path based data loading
  if(currentRoute.location.pathname === "/blog") {
    yield all([blogSaga()])
    return
  }

  // Path based data loading
  if(currentRoute.location.pathname.includes("/blog/")) {
    const slug = currentRoute.location.pathname?.split("/")?.[2]
    yield call(blogEntrySaga, slug);
    return
  }
  
}
