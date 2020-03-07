import { all, takeEvery} from 'redux-saga/effects'

import { abilitiesSagas } from './ability/sagas';
import { blogSaga } from './blog/sagas';
import { folioSaga } from './folio/sagas';
import { educationSaga } from './education/sagas';
import { experianceSaga } from './experiance/sagas';
import { metadataSagas } from './metadata/sagas';
import { assetSaga } from './assets/sagas';
import { contactSaga } from './contact/sagas';

import { 
  AbilitiesActionTypes,
  BlogActionTypes,
  EducationActionTypes,
  ExperianceActionTypes,
  FolioActionTypes,
  AssetActionTypes,
  GlobalActionTypes
} from './actions'

export function* fetchAllSaga() {
  yield all([
    abilitiesSagas(),
    blogSaga(),
    educationSaga(),
    experianceSaga(),
    folioSaga(),
    metadataSagas()
  ])
}

export default function* rootSaga() {
  yield all([
    // Fetch our global parameters
    metadataSagas(),
    // Bind our actions
    takeEvery(GlobalActionTypes.FETCH_START, metadataSagas),
    takeEvery(AbilitiesActionTypes.FETCH_START, abilitiesSagas),
    takeEvery(BlogActionTypes.FETCH_START, blogSaga),
    takeEvery(EducationActionTypes.FETCH_START, educationSaga),
    takeEvery(ExperianceActionTypes.FETCH_START, experianceSaga),
    takeEvery(FolioActionTypes.FETCH_START, folioSaga),
    takeEvery(AssetActionTypes.FETCH_START, assetSaga),
    takeEvery(AssetActionTypes.FETCH_START, contactSaga),
  ])
}