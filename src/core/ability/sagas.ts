import { call, put } from 'redux-saga/effects';
import { AbilitiesActionTypes } from './actions'

import { fetchAbilities } from './fetch';

export function* abilitiesSagas() {
  try {
    const payload = yield call(fetchAbilities);
    yield put({
      type: AbilitiesActionTypes.FETCH_SUCCESS,
      payload: payload.data
    });
  } catch(ex) {
    yield put({
      type: AbilitiesActionTypes.FETCH_ERROR,
      ex
    });
  }
}