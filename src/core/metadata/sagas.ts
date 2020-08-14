import { path } from 'ramda';
import { call, put } from 'redux-saga/effects';

import { MetadataActionTypes, fetchSuccess, fetchRequest } from './actions'
import { fetchMetadata } from './fetch';
import { metadataId } from '../constants';

export function* metadataSagas() {
  try {
    const payload = yield call(fetchMetadata, metadataId);    
    yield put(fetchRequest(path<any>(['data', 'fields', 'primaryImage', 'sys', 'id'], payload)))
    yield put(fetchSuccess(payload.data.fields));
  } catch(ex) {
    yield put({
      type: MetadataActionTypes.FETCH_ERROR,
      ex
    });
  }
}