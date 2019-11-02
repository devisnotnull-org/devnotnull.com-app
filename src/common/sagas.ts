import { all, takeEvery} from 'redux-saga/effects'

import { abilitiesSagas } from './ability/sagas';
import { blogSaga } from './blog/sagas';
import { folioSaga } from './folio/sagas';
import { educationSaga } from './education/sagas';
import { experianceSaga } from './experiance/sagas';
import testSagas from './test/sagas';

import { 
  AbilitiesActionTypes,
  BlogActionTypes,
  EducationActionTypes,
  ExperianceActionTypes,
  FolioActionTypes,
  GlobalActionTypes
} from './actions'

export function* fetchAllSaga() {
  yield all([
    abilitiesSagas(),
    blogSaga(),
    educationSaga(),
    experianceSaga(),
    folioSaga()
  ])
}

export default function* rootSaga() {
  yield all([
    testSagas(),
    fetchAllSaga(),
    takeEvery(GlobalActionTypes.FETCH_START, fetchAllSaga),
    takeEvery(AbilitiesActionTypes.FETCH_START, abilitiesSagas),
    takeEvery(BlogActionTypes.FETCH_START, blogSaga),
    takeEvery(EducationActionTypes.FETCH_START, educationSaga),
    takeEvery(ExperianceActionTypes.FETCH_START, experianceSaga),
    takeEvery(FolioActionTypes.FETCH_START, folioSaga),
  ])
}