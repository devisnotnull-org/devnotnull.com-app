import { call, put } from 'redux-saga/effects';
import { AbilitiesActionTypes, fetchSuccess } from './actions'

import { fetchAbilities } from './fetch';

export function* abilitiesSagas() {
  try {
    const payload = yield call(fetchAbilities);
    yield put(fetchSuccess(payload.data))
  } catch(ex) {
    yield put({
      type: AbilitiesActionTypes.FETCH_ERROR,
      ex
    });
  }
}