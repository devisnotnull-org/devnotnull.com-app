import { all, takeEvery, select } from "redux-saga/effects";
import { ROUTER_ON_LOCATION_CHANGED } from "@lagunovsky/redux-react-router";

import { abilitiesSagas } from "./ability/sagas";
import { folioSaga } from "./portfolio/sagas";
import { educationSaga } from "./education/sagas";
import { experianceSaga } from "./experiance/sagas";
import { metadataSagas } from "./metadata/sagas";
import { assetSaga } from "./assets/sagas";
import { routeSagas } from "./route/sagas";
import { contactSaga } from "./contact/sagas";

import {
  AbilitiesActionTypes,
  EducationActionTypes,
  ExperianceActionTypes,
  FolioActionTypes,
  AssetActionTypes,
  GlobalActionTypes,
} from "./actions";

export function* fetchAllSaga() {
  yield all([
    abilitiesSagas(),
    educationSaga(),
    experianceSaga(),
    folioSaga(),
    metadataSagas(),
  ]);
}

export default function* rootSaga() {
  yield all([
    fetchAllSaga(),
    // Initial setup
    routeSagas(),
    // Bind our actions
    takeEvery(GlobalActionTypes.FETCH_START, metadataSagas),
    takeEvery(ROUTER_ON_LOCATION_CHANGED, routeSagas),
    takeEvery(AbilitiesActionTypes.FETCH_START, abilitiesSagas),
    takeEvery(EducationActionTypes.FETCH_START, educationSaga),
    takeEvery(ExperianceActionTypes.FETCH_START, experianceSaga),
    takeEvery(FolioActionTypes.FETCH_START, folioSaga),
    takeEvery(AssetActionTypes.FETCH_START, assetSaga),
    takeEvery(AssetActionTypes.FETCH_START, contactSaga),
  ]);
}
